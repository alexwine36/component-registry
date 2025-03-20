import { CopyAddButton } from './copy-add-button';
import { OpenInV0Button } from './open-in-v0-button';

type CodeActionsProps = {
  name: string;
};

export const CodeActions = ({ name }: CodeActionsProps) => {
  return (
    <div className="flex gap-2">
      <OpenInV0Button name={name} className="w-fit" />
      <CopyAddButton name={name} className="size-7" />
    </div>
  );
};
