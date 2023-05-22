import {
  Controls,
  ArgsTable,
  Description,
  Primary,
  Stories,
  Subtitle,
  Title,
} from '@storybook/blocks';

export const defaultTemplate = () => (
  <>
    <Title />
    <Subtitle />
    <Description  />
    <Primary  />
    <Controls />
    <Stories includePrimary={false}  />
  </>
);
export const subcomponentsTemplate = () => (
  <>
    <Title />
    <Subtitle />
    <Description />
    <Primary />
    <ArgsTable />
    <Stories includePrimary={false} />
  </>
);