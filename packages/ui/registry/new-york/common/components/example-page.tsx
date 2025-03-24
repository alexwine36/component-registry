import PokemonPage from '../../complex-component/page';
import { CopyButton } from '../../copy-to-clipboard/components/copy-button';
import { Heading, Text } from '../../typography/components/typography';
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

      <ExampleContainer name="typography">
        <div className="flex flex-col">
          <Heading level={1}>Heading 1</Heading>
          <Heading level={2}>Heading 2</Heading>
          <Heading level={3}>Heading 3</Heading>

          <Text>Text</Text>
          <Text variant="lead">Lead Text</Text>
        </div>
      </ExampleContainer>
    </main>
  );
};
