# awine-nextjs-bundle-analysis

[nextjs-bundle-analysis](https://github.com/hashicorp/nextjs-bundle-analysis) for Next.js apps using App directory

## Configuration

Config values are written to `package.json` under the key `nextBundleAnalysis`, and can be changed there any time. You can directly edit the workflow file if you want to adjust your default branch or the directory that your nextjs app lives in (especially if you are using a `srcDir` or something similar).

### `showDetails (boolean)`

(Optional, defaults to `true`) This option renders a collapsed "details" section under each section of the bundle analysis comment explaining some of the finer details of the numbers provided. If you feel like this is not necessary and you and/or those working on your project understand the details, you can set this option to `false` and that section will not render.

### `buildOutputDirectory (string)`

(Optional, defaults to `.next`) If your application [builds to a custom directory](https://nextjs.org/docs/api-reference/next.config.js/setting-a-custom-build-directory), you can specify this with the key `buildOutputDirectory`. You will also need to replace all instances of `.next` in `next_bundle_analysis.yml` with your custom output directory.

For example, if you build to `dist`, you should:

- Set `package.json.nextBundleAnalysis.buildOutputDirectory` to `"dist"`.
- In `nextjs_bundle_analysis`, replace all instances of `.next` with `dist`.

### `budget (number)`

(Optional) The file size, in bytes, to budget for first page load size. For example, if `budget` was set to `358400` (350 KB) and a page's first load size was 248 KB, the report would list that page as having used 70% of the performance budget.

### `budgetPercentIncreaseRed (number)`

(Optional, but required if `budget` is specified) If a page's first load size has increased more than `budgetPercentIncreaseRed` percent, display a 🔴 to draw attention to the change.

### `minimumChangeThreshold (number)`

(Optional, defaults to `0`) The threshold under which pages will be considered unchanged. For example, if `minimumChangeThreshold` was set to `500` and a page's size increased by `300 B`, it will be considered unchanged.

### `skipCommentIfEmpty (boolean)`

(Optional, defaults to `false`) When set to `true`, if no pages have changed size the generated comment will be an empty string.

## Caveats

- This plugin only analyzes the direct bundle output from next.js. If you have added any other scripts via the `<script>` tag, especially third party scripts and things like analytics or other tracking scripts, these are not included in the analysis. Scripts of this nature should _probably_ be loaded in behind a consent manager and should not make an impact on your initial load, and as long as this is how you handle them it should make no difference, but it's important to be aware of this and account for the extra size added by these scripts if they are present in your app.
- Since this plugin works by comparing the base bundle against each PR, the first time it is run, it will fail since it has no base to compare against. This is expected - ideally you can just commit the changes directly to your default branch, where it will run to generate the base bundle, then anything that branches off after that will have a valid comparison point and the script will work as expected.
- This script assumes that running `next build` will successfully build your application. If you need additional scripts or logic to do so, you may need to update the action step called "Build next.js app" to the command needed to build your app. For example, if you have a `npm run build` step, that would be a good target to change it to. We plan to make this configurable via the generator in the future.