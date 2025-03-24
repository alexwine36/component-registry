import RegistryItems from '../../../../registry-items.json';
import { CodeActions } from './code-actions';

type ExampleContainerProps = {
  name: keyof typeof RegistryItems;
  children?: React.ReactNode;
};

export const ExampleContainer = ({ name, children }: ExampleContainerProps) => {
  const item = RegistryItems[name];
  return (
    <div className="relative flex min-h-[450px] flex-col gap-4 rounded-lg border p-4">
      <div className="flex items-center justify-between">
        <div className="flex flex-col">
          <h2 className=" text-sm sm:pl-3">{item.title}</h2>
          <h2 className="text-muted-foreground text-sm sm:pl-3">
            {item.description}
          </h2>
        </div>

        <CodeActions name={name} />
      </div>
      <div className="relative flex min-h-[400px] items-center justify-center">
        {children}
      </div>
    </div>
  );
};
