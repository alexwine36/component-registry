'use client';

import {
  Button,
  type ButtonProps,
} from '@/registry/new-york/common/components/ui/button';
import { copyToClipboard } from '@/registry/new-york/copy-to-clipboard/lib/copy-to-clipboard';
import { Clipboard } from 'lucide-react';

type CopyButtonProps = {
  buttonProps?: ButtonProps;
  value: string;
  postClick?: () => void;
};

export const CopyButton = ({
  buttonProps,
  value,
  postClick,
}: CopyButtonProps) => {
  const handleClick = () => {
    postClick?.();
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
