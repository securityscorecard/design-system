/* eslint-disable filenames/match-exported */
const locale = {
  loading: '読み込み中',
  'filters.apply': '適用',
  'filters.close': '閉じる',
  'filters.cancel': 'キャンセル',
  'filters.removeRule': '削除',
  'filters.clearRules': 'すべての条件をクリア',
  'filters.unappliedFilters': '適用されていないフィルターがあります',
  'filters.addRule': '条件を追加',
  'filters.whereOperator': 'Where',
  'filters.andOperator': 'And',
  'filters.orOperator': 'Or',
  'filters.count.placeholder': '数',
  'filters.count.error': '整数のみ使用してください',
  'filters.input.placeholder': '文字列',
  'filters.integer.placeholder': '整数',
  'filters.integer.error': '整数のみ使用してください',
  'filters.number.placeholder': '数値',
  'filters.number.error': '数値のみ使用してください',
  'filters.tagsInput.placeholder': '値を入力',
  'datatable.pagination.itemCounter.short':
    '{firstRowIndex}～{lastRowIndex} / {totalRowCount}',
  'datatable.pagination.itemCounter.full':
    '全{totalRowCount}行中の{firstRowIndex}～{lastRowIndex}行目',
  'datatable.pagination.rowsPerPage': 'ページあたりの行数',
  'datatable.pagination.rowsPerPage.short': '行',
  'datatable.pagination.goToFirstPage': 'テーブルの最初のページに移動',
  'datatable.pagination.goToLastPage': 'テーブルの最後のページに移動',
  'datatable.pagination.goToPreviousPage': 'テーブルの前のページに移動',
  'datatable.pagination.goToNextPage': 'テーブルの次のページに移動',
  'datatable.topToolbar.itemCounter': '{totalRowCount} 行',
  'datatable.topToolbar.hiddenColumns':
    '{count, plural, one {# 列が非表示} other {# 列が非表示}}',
  'datatable.topToolbar.columns': '列',
  'datatable.topToolbar.fullScreen': '全画面表示',
  'datatable.selection.itemCounter':
    '{totalRowCount}行中<bold>{selectedRowCount}</bold>行が選択されています',
  'datatable.selection.clearSelection': '選択をクリア',
  'datatable.selection.toggleAll': '全選択/全解除',
  'datatable.selection.toggleRow': '行の選択/解除',
  'datatable.noData.title': '結果が見つかりませんでした',
  'datatable.noData.list.description': '以下の理由で発生することがあります:',
  'datatable.noData.list.emptySet': 'データセットが空です',
  'datatable.noData.list.activeFilters':
    'アクティブなフィルターに一致するアイテムがありません',
  'datatable.expanding.expandAll': '全ての行を展開',
  'datatable.expanding.collapseAll': '全ての行を折りたたむ',
  'datatable.expanding.expandRow': '行を展開',
  'datatable.expanding.collapseRow': '行を折りたたむ',
  'datatable.rowActions.trigger': '行アクション',
  'datatable.columnActions.trigger': '列アクション',
  'datatable.columnActions.sort.ascending': '昇順ソート',
  'datatable.columnActions.sort.descending': '降順ソート',
  'datatable.columnActions.sort.clear': 'ソートをクリア',
  'datatable.columnActions.hideColumn': '列を非表示',
  'datatable.columnActions.pinning.pin': '列を固定',
  'datatable.columnActions.pinning.unpin': '列の固定を解除',
  'datatable.columnActions.resetSize': '列のサイズをリセット',
  'datatable.settings.title': '列の設定',
  'datatable.settings.close': '列の設定を閉じる',
  'datatable.settings.reset': 'デフォルトにリセット',
  'datatable.settings.hiding.showAll': '全ての列を表示',
  'datatable.settings.hiding.hideAll': '全ての列を非表示',
  'datatable.settings.hiding.showColumn': '列 {columnName} を表示',
  'datatable.settings.hiding.hideColumn': '列 {columnName} を非表示',
  'datatable.settings.pinnig.pinAll': '全ての列を固定',
  'datatable.settings.pinnig.unpinAll': '全ての列の固定を解除',
  'datatable.settings.pinnig.pinColumn': '列 {columnName} を固定',
  'datatable.settings.pinnig.unpinColumn': '列 {columnName} の固定を解除',
  'datatable.settings.ordering.reorder': '列 {columnName} を並び替え',
  'datatable.settings.ordering.screenReader.instructions':
    'テーブルの列をドラッグ&ドロップするには、スペースキーまたはEnterを押してください。上下矢印キーを使ってテーブル内の列の位置を変更できます。アイテムを新しい位置にドロップするにはスペースキーまたはEnterを再度押し、キャンセルするにはEscapeを押してください。',
  'datatable.settings.ordering.screenReader.pickedUp':
    '{header} 列を選択しました。',
  'datatable.settings.ordering.screenReader.movedOver':
    '{activeHeader} 列が {overHeader} 列の上に移動しました。',
  'datatable.settings.ordering.screenReader.dropped':
    '{activeHeader} 列がドロップされました。',
  'datatable.settings.ordering.screenReader.droppedOver':
    '{activeHeader} 列が {overHeader} 列の上にドロップされました',
  'datatable.settings.ordering.screenReader.dragCancel':
    'ドラッグがキャンセルされました。{header} 列がドロップされました。',
  'datatable.settings.ordering.screenReader.notDroppableArea':
    '{activeHeader} 列はもはやドロップ可能な領域にはありません。',
} as const;
export default locale;
