'use client';
import { getUrl } from '@repo/utils';
import { toast } from 'sonner';
import { CopyButton } from '../../copy-to-clipboard/components/copy-button';

type CopyAddButtonProps = {
  name: string;
} & React.ComponentProps<typeof CopyButton>['buttonProps'];

export function CopyAddButton({ name, ...props }: CopyAddButtonProps) {
  const value = `pnpm dlx shadcn@latest add ${getUrl(`/r/${name}.json`)}`;

  const postClick = () => {
    console.log('POST CLICK');
    toast('Copied to clipboard');
  };
  return <CopyButton postClick={postClick} buttonProps={props} value={value} />;
}
