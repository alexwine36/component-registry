import PokemonPage from '@/registry/new-york/complex-component/page';
import { ExampleForm } from '@/registry/new-york/example-form/example-form';
import { HelloWorld } from '@/registry/new-york/hello-world/hello-world';
import { CodeActions } from '../registry/new-york/common/components/code-actions';

// This page displays items from the custom registry.
// You are free to implement this with your own design as needed.

export default function Home() {
  return (
    <div className="mx-auto flex min-h-svh max-w-3xl flex-col gap-8 px-4 py-8">
      <header className="flex flex-col gap-1">
        <h1 className="font-bold text-3xl tracking-tight">Custom Registry</h1>
        <p className="text-muted-foreground">
          A custom registry for distribution code using shadcn.
        </p>
      </header>
      <main className="flex flex-1 flex-col gap-8">
        <div className="relative flex min-h-[450px] flex-col gap-4 rounded-lg border p-4">
          <div className="flex items-center justify-between">
            <h2 className="text-muted-foreground text-sm sm:pl-3">
              A simple hello world component
            </h2>
            <CodeActions name="hello-world" />
          </div>
          <div className="relative flex min-h-[400px] items-center justify-center">
            <HelloWorld />
          </div>
        </div>

        <div className="relative flex min-h-[450px] flex-col gap-4 rounded-lg border p-4">
          <div className="flex items-center justify-between">
            <h2 className="text-muted-foreground text-sm sm:pl-3">
              A contact form with Zod validation.
            </h2>
            <CodeActions name="example-form" />
          </div>
          <div className="relative flex min-h-[500px] items-center justify-center">
            <ExampleForm />
          </div>
        </div>

        <div className="relative flex min-h-[450px] flex-col gap-4 rounded-lg border p-4">
          <div className="flex items-center justify-between">
            <h2 className="text-muted-foreground text-sm sm:pl-3">
              A complex component showing hooks, libs and components.
            </h2>
            <CodeActions name="complex-component" />
          </div>
          <div className="relative flex min-h-[400px] items-center justify-center">
            <PokemonPage />
          </div>
        </div>
      </main>
    </div>
  );
}
