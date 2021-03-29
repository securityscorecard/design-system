export const ACTIONS_COLUMN_ID = 'actions';
export const SELECTION_COLUMN_ID = 'selection';

export const CellTypes = {
  multiValue: 'multiValue',
  link: 'link',
  discreteLink: 'discreteLink',
  text: 'text',
  selection: SELECTION_COLUMN_ID,
  actions: ACTIONS_COLUMN_ID,
} as const;
