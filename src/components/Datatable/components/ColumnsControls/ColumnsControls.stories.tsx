import { useState } from 'react';
import { Meta, StoryFn } from '@storybook/react';
import { action } from '@storybook/addon-actions';

import ColumnsControls from './ColumnsControls';
import { simpleColumns } from '../../../_internal/BaseTable/mocks/columns';
import { useColumnsControls } from '../../hooks/useColumnsControls';
import { ColumnsControlsProps } from './ColumnsControls.types';

export default {
  title:
    'components/Datatable/internalComponents/ControlsModule/ColumnsControls',
  component: ColumnsControls,
  parameters: {
    viewMode: 'story',
    docs: { disable: true },
    previewTabs: { 'storybook/docs/panel': { hidden: true } },
  },
} as Meta;

export const Default: StoryFn<ColumnsControlsProps> = ({ isOpen, ...args }) => {
  const [isDefaultOpen, setIsDefaultOpen] = useState(isOpen);
  useColumnsControls(
    action('onColumnOrderChange'),
    action('onColumnVisibilityChange'),
    simpleColumns,
  );

  return (
    <ColumnsControls isOpen={isDefaultOpen} {...args}>
      <button type="button" onClick={() => setIsDefaultOpen((state) => !state)}>
        Open Columns
      </button>
    </ColumnsControls>
  );
};
Default.args = {
  isOpen: true,
  onApply: action('ColumnsOnApply'),
  onClose: action('ColumnsOnClose'),
  onOpen: action('ColumnsOnOpen'),
  onReset: action('ColumnsOnReset'),
};
Default.parameters = {
  screenshot: { skip: true },
};

export const WithCustomOrder: StoryFn<ColumnsControlsProps> = ({
  isOpen,
  ...args
}) => {
  const [isDefaultOpen, setIsDefaultOpen] = useState(isOpen);
  useColumnsControls(
    action('onColumnOrderChange'),
    action('onColumnVisibilityChange'),
    simpleColumns,
    ['country', 'source', 'findingsCount'],
  );

  return (
    <ColumnsControls isOpen={isDefaultOpen} {...args}>
      <button type="button" onClick={() => setIsDefaultOpen((state) => !state)}>
        Open Columns
      </button>
    </ColumnsControls>
  );
};

WithCustomOrder.args = Default.args;
