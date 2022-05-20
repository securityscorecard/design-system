import React, { useState } from 'react';
import { Meta, Story } from '@storybook/react/types-6-0';
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

export const Default: Story<ColumnsControlsProps> = ({ isOpen, ...args }) => {
  const [isDefaultOpen, setIsDefaultOpen] = useState(isOpen);
  useColumnsControls(action('onColumnOrderChange'), simpleColumns);

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

export const WithCustomOrder: Story<ColumnsControlsProps> = ({
  isOpen,
  ...args
}) => {
  const [isDefaultOpen, setIsDefaultOpen] = useState(isOpen);
  useColumnsControls(action('onColumnOrderChange'), simpleColumns, [
    'country',
    'source',
    'findingsCount',
  ]);

  return (
    <ColumnsControls isOpen={isDefaultOpen} {...args}>
      <button type="button" onClick={() => setIsDefaultOpen((state) => !state)}>
        Open Columns
      </button>
    </ColumnsControls>
  );
};

WithCustomOrder.args = Default.args;
