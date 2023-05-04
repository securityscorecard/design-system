import React from 'react';
import { action } from '@storybook/addon-actions';

import { BatchActionArgs } from '../Datatable.types';
import { Action } from '../types/Action.types';
import { ActionKinds } from '../../../types/action.types';
import Inline from '../../layout/Inline/Inline';
import Icon from '../../Icon/Icon';
import { Tooltip } from '../../Tooltip';

export const subactionsMock: ActionKinds<BatchActionArgs>[] = [
  {
    label: 'OnClick',
    name: 'onClick',
    onClick: action('onClick handler'),
  },
  {
    label: 'Absolute link',
    name: 'absolute',
    onClick: action('Absolute link handler'),
    href: '/',
  },
  {
    label: 'Relative link',
    name: 'relative',
    onClick: action('Relative link handler'),
    to: '/',
  },
];

export const actionsMock: Action<BatchActionArgs>[] = [
  ...subactionsMock,
  {
    label: 'Dropdown',
    name: 'dropdown',
    onClick: action('Dropdown click'),
    subActions: subactionsMock,
  },
];

export const tableActionsMock: Action<string[]>[] = [
  {
    name: 'Export',
    label: (
      <Inline align="center" gap="sm">
        <span>Export</span>
        <Tooltip popup="This is an informative tooltip">
          <Icon name="info-circle" />
        </Tooltip>
      </Inline>
    ),
    onClick: action('onBatchActionClick (export)'),
  },
  {
    label: 'Import',
    name: 'Import',
    onClick: action('onBatchActionClick (import)'),
  },
  {
    label: 'Claim',
    name: 'Claim',
    onClick: action('onBatchActionClick (claim)'),
  },
  {
    label: 'Remove',
    name: 'Remove',
    onClick: action('onBatchActionClick (remove)'),
  },
  {
    label: 'Tooltip',
    name: 'Tooltip',
    tooltip: 'You can display a tooltip by using the `tooltip` prop',
    onClick: action('onBatchActionClick (tooltip)'),
  },
];

export const datatableRowActions = [
  {
    label: 'Detail',
    name: 'detail',
    onClick: action('onTableRowActionClick (detail)'),
  },
];

export const datatableBatchActions = [
  {
    label: (
      <Inline align="center" gap="sm">
        <span>Add assets</span>
        <Tooltip popup="This is an informative tooltip">
          <Icon name="info-circle" />
        </Tooltip>
      </Inline>
    ),
    name: 'add-assets',
    onClick: action('onBatchActionClick (add assets)'),
  },
  {
    isDisabled: true,
    label: (
      <Inline align="center" gap="sm">
        <span>Disabled action</span>
      </Inline>
    ),
    name: 'disabled-action',
    onClick: action('onBatchActionClick (disabled action)'),
  },
  {
    label: 'More actions',
    name: 'more-actions',
    subActions: [
      {
        label: 'Remove assets',
        name: 'remove-assets',
        onClick: action('onBatchActionClick (remove assets)'),
      },
    ],
  },
];
