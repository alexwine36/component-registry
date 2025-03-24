import PokemonPage from '../../complex-component/page';
import { CopyButton } from '../../copy-to-clipboard/components/copy-button';
import { ExampleContainer } from './example-container';

export const ExamplePage = () => {
  return (
    <main className="flex flex-1 flex-col gap-8">
      <ExampleContainer name="copy-to-clipboard">
        <CopyButton value="something" />
      </ExampleContainer>
      <ExampleContainer name="complex-component">
        <PokemonPage />
      </ExampleContainer>
    </main>
  );
};
