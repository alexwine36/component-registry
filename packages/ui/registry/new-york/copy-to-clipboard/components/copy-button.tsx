'use client';

import {
  Button,
  type ButtonProps,
} from '@/registry/new-york/common/components/ui/button';
import { copyToClipboard } from '@/registry/new-york/copy-to-clipboard/lib/copy-to-clipboard';
import { Clipboard } from 'lucide-react';
import { toast } from 'sonner';

type CopyButtonProps = {
  buttonProps?: ButtonProps;
  value: string;
};

export const CopyButton = ({ buttonProps, value }: CopyButtonProps) => {
  const handleClick = () => {
    toast('Copied to clipboard');
    copyToClipboard(value);
  };
  return (
    <Button
      onClick={handleClick}
      variant="outline"
      size="icon"
      {...buttonProps}
    >
      <Clipboard />
    </Button>
  );
};
