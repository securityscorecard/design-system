/* eslint-disable filenames/match-exported */
const locale = {
  loading: 'Loading',
  'filters.apply': 'Apply',
  'filters.close': 'Close',
  'filters.cancel': 'Cancel',
  'filters.removeRule': 'Remove',
  'filters.clearRules': 'Clear all criteria',
  'filters.unappliedFilters': 'You have unapplied filters',
  'filters.addRule': 'Add criteria',
  'filters.whereOperator': 'Where',
  'filters.andOperator': 'And',
  'filters.orOperator': 'Or',
  'filters.count.placeholder': 'Count',
  'filters.count.error': 'Use only integers',
  'filters.input.placeholder': 'String',
  'filters.integer.placeholder': 'Integer',
  'filters.integer.error': 'Use only integers',
  'filters.number.placeholder': 'Number',
  'filters.number.error': 'Use only numbers',
  'filters.tagsInput.placeholder': 'Enter value',
  'datatable.pagination.itemCounter.short':
    '{firstRowIndex}-{lastRowIndex} of {totalRowCount}',
  'datatable.pagination.itemCounter.full':
    '{firstRowIndex}-{lastRowIndex} of {totalRowCount} {count, plural, one {total row} other {total rows}}',
  'datatable.pagination.rowsPerPage': 'Rows per page',
  'datatable.pagination.rowsPerPage.short': 'Rows',
  'datatable.pagination.goToFirstPage': 'Go to the first page of table',
  'datatable.pagination.goToLastPage': 'Go to the last page of table',
  'datatable.pagination.goToPreviousPage': 'Go to the previous page of table',
  'datatable.pagination.goToNextPage': 'Go to the next page of table',
  'datatable.topToolbar.itemCounter':
    '{count, plural, one {{totalRowCount} row} other {{totalRowCount} rows}}',
  'datatable.topToolbar.hiddenColumns':
    '{count, plural, one {{count} column hidden} other {{count} columns hidden}}',
  'datatable.topToolbar.columns': 'Columns',
  'datatable.topToolbar.fullScreen': 'Full Screen',
  'datatable.selection.itemCounter':
    '{count, plural, one {<bold>{selectedRowCount}</bold> of {totalRowCount} row selected} other {<bold>{selectedRowCount}</bold> of {totalRowCount} rows selected}}',
  'datatable.selection.clearSelection': 'Clear selection',
  'datatable.selection.toggleAll': 'Toggle select all',
  'datatable.selection.toggleRow': 'Toggle select row',
  'datatable.noData.title': 'No results found',
  'datatable.noData.list.description': 'This may happen because:',
  'datatable.noData.list.emptySet': 'the data set is empty',
  'datatable.noData.list.activeFilters':
    'none of the items match your active filters',
  'datatable.expanding.expandAll': 'Expand all rows',
  'datatable.expanding.collapseAll': 'Collapse all rows',
  'datatable.expanding.expandRow': 'Expand row',
  'datatable.expanding.collapseRow': 'Collapse row',
  'datatable.rowActions.trigger': 'Row actions',
  'datatable.columnActions.trigger': 'Column actions',
  'datatable.columnActions.sort.ascending': 'Ascending sort',
  'datatable.columnActions.sort.descending': 'Descending sort',
  'datatable.columnActions.sort.clear': 'Clear sort',
  'datatable.columnActions.hideColumn': 'Hide column',
  'datatable.columnActions.pinning.pin': 'Pin column',
  'datatable.columnActions.pinning.unpin': 'Unpin column',
  'datatable.columnActions.resetSize': 'Reset column size',
  'datatable.settings.title': 'Column settings',
  'datatable.settings.close': 'Close column settings',
  'datatable.settings.reset': 'Reset to default',
  'datatable.settings.hiding.showAll': 'Show all columns',
  'datatable.settings.hiding.hideAll': 'Hide all columns',
  'datatable.settings.hiding.showColumn': 'Show {columnName} column',
  'datatable.settings.hiding.hideColumn': 'Hide {columnName} column',
  'datatable.settings.pinnig.pinAll': 'Pin all columns',
  'datatable.settings.pinnig.unpinAll': 'Unpin all columns',
  'datatable.settings.pinnig.pinColumn': 'Unpin {columnName} column',
  'datatable.settings.pinnig.unpinColumn': 'Unpin {columnName} column',
  'datatable.settings.ordering.reorder': 'Reorder {columnName} column',
  'datatable.settings.ordering.screenReader.instructions':
    'To pick up a draggable table column, press Space or Enter. Use the Up and Down arrow keys to update the position of the column in the table. Press Space or Enter again to drop the item in its new position, or press Escape to cancel.',
  'datatable.settings.ordering.screenReader.pickedUp':
    'Picked up {header} column.',
  'datatable.settings.ordering.screenReader.movedOver':
    '{activeHeader} column was moved over {overHeader} column.',
  'datatable.settings.ordering.screenReader.dropped':
    '{activeHeader} column was dropped.',
  'datatable.settings.ordering.screenReader.droppedOver':
    '{activeHeader} column was dropped over {overHeader} column',
  'datatable.settings.ordering.screenReader.dragCancel':
    'Dragging was cancelled. {header} column was dropped.',
  'datatable.settings.ordering.screenReader.notDroppableArea':
    '{activeHeader} column is no longer over a droppable area.',
} as const;
export default locale;
