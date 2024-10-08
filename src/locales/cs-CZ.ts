/* eslint-disable filenames/match-exported */
const locale = {
  loading: 'Načítám',
  'filters.apply': 'Použít',
  'filters.close': 'Zavřít',
  'filters.cancel': 'Zrušit',
  'filters.removeRule': 'Odstranit',
  'filters.clearRules': 'Zrušit všechny filtry',
  'filters.unappliedFilters': 'Máte neaplikované filtry',
  'filters.addRule': 'Přidat filtr',
  'filters.whereOperator': 'Kde',
  'filters.andOperator': 'A',
  'filters.orOperator': 'Nebo',
  'filters.count.placeholder': 'Počet',
  'filters.count.error': 'Použijte pouze celá čísla',
  'filters.input.placeholder': 'Text',
  'filters.integer.placeholder': 'Celé číslo',
  'filters.integer.error': 'Použijte pouze celá čísla',
  'filters.number.placeholder': 'Číslo',
  'filters.number.error': 'Použijte pouze čísla',
  'filters.tagsInput.placeholder': 'Zadejte hodnotu',
  'datatable.pagination.itemCounter.short':
    '{firstRowIndex}-{lastRowIndex} z {totalRowCount}',
  'datatable.pagination.itemCounter.full':
    '{firstRowIndex}-{lastRowIndex} z {totalRowCount} {count, plural, one {řádku} few {řádků} other {řádků}} celkem',
  'datatable.pagination.rowsPerPage': 'Řádků na stránku',
  'datatable.pagination.rowsPerPage.short': 'Řádky',
  'datatable.pagination.goToFirstPage': 'Jít na první stránku tabulky',
  'datatable.pagination.goToLastPage': 'Jít na poslední stránku tabulky',
  'datatable.pagination.goToPreviousPage': 'Jít na předchozí stránku tabulky',
  'datatable.pagination.goToNextPage': 'Jít na další stránku tabulky',
  'datatable.topToolbar.itemCounter':
    '{totalRowCount} {count, plural, one {řádek} few {řádky} other {řádků}}',
  'datatable.topToolbar.hiddenColumns':
    '{count} {count, plural, one {skrytý sloupec} few {skryté sloupce} other {skrytých sloupců}}',
  'datatable.topToolbar.columns': 'Sloupce',
  'datatable.topToolbar.fullScreen': 'Celá obrazovka',
  'datatable.selection.itemCounter':
    'Vybráno <bold>{selectedRowCount}</bold> z {totalRowCount} {count, plural, one {řádku} few {řádků} other {řádků}}',
  'datatable.selection.clearSelection': 'Zrušit výběr',
  'datatable.selection.toggleAll': 'Přepnout výběr všech řádů',
  'datatable.selection.toggleRow': 'Přepnout výběr řádku',
  'datatable.noData.title': 'Nenalezeny žádné výsledky',
  'datatable.noData.list.description': 'Toto může nastat z důvodu, že:',
  'datatable.noData.list.emptySet': 'datová sada je prázdná',
  'datatable.noData.list.activeFilters':
    'žádný z položek neodpovídá vašim aktivním filtrům',
  'datatable.expanding.expandAll': 'Rozbalit všechny řádky',
  'datatable.expanding.collapseAll': 'Sbalit všechny řádky',
  'datatable.expanding.expandRow': 'Rozbalit řádek',
  'datatable.expanding.collapseRow': 'Sbalit řádek',
  'datatable.rowActions.trigger': 'Akce řádku',
  'datatable.columnActions.trigger': 'Akce sloupce',
  'datatable.columnActions.sort.ascending': 'Třídit vzestupně',
  'datatable.columnActions.sort.descending': 'Třídit sestupně',
  'datatable.columnActions.sort.clear': 'Zrušit třídění',
  'datatable.columnActions.hideColumn': 'Skrýt sloupec',
  'datatable.columnActions.pinning.pin': 'Připnout sloupec',
  'datatable.columnActions.pinning.unpin': 'Odepnout sloupec',
  'datatable.columnActions.resetSize': 'Obnovit velikost sloupce',
  'datatable.settings.title': 'Nastavení sloupců',
  'datatable.settings.close': 'Zavřít nastavení sloupců',
  'datatable.settings.reset': 'Obnovit výchozí',
  'datatable.settings.hiding.showAll': 'Zobrazit všechny sloupce',
  'datatable.settings.hiding.hideAll': 'Skrýt všechny sloupce',
  'datatable.settings.hiding.showColumn': 'Zobrazit sloupec {columnName}',
  'datatable.settings.hiding.hideColumn': 'Skrýt sloupec {columnName}',
  'datatable.settings.pinnig.pinAll': 'Připnout všechny sloupce',
  'datatable.settings.pinnig.unpinAll': 'Odepnout všechny sloupce',
  'datatable.settings.pinnig.pinColumn': 'Připnout sloupec {columnName}',
  'datatable.settings.pinnig.unpinColumn': 'Odepnout sloupec {columnName}',
  'datatable.settings.ordering.reorder': 'Změnit pořadí sloupce {columnName}',
  'datatable.settings.ordering.screenReader.instructions':
    'Chcete-li vybrat sloupec tabulky, stiskněte Mezerník nebo Enter. Pomocí šipek nahoru a dolů upravte pozici sloupce v tabulce. Dalším stisknutím Mezerníku nebo Eneru sloupec v nové pozici uvolněte nebo stisknutím Escape operaci zrušte.',
  'datatable.settings.ordering.screenReader.pickedUp':
    'Byl vybrán sloupec {header}.',
  'datatable.settings.ordering.screenReader.movedOver':
    'Sloupec {activeHeader} se přesunul nad sloupec {overHeader}.',
  'datatable.settings.ordering.screenReader.dropped':
    'Sloupec {activeHeader} byl uvolněn.',
  'datatable.settings.ordering.screenReader.droppedOver':
    'Sloupec {activeHeader} byl uvolněn nad sloupcem {overHeader}',
  'datatable.settings.ordering.screenReader.dragCancel':
    'Přetahování bylo zrušeno. Sloupec {header} byl uvolněn.',
  'datatable.settings.ordering.screenReader.notDroppableArea':
    'Sloupec {activeHeader} již není nad oblastí, kam lze položku upustit.',
} as const;
export default locale;
