/* eslint-disable filenames/match-exported */
const locale = {
  loading: 'Carregando',
  'filters.apply': 'Aplicar',
  'filters.close': 'Fechar',
  'filters.cancel': 'Cancelar',
  'filters.removeRule': 'Remover',
  'filters.clearRules': 'Limpar todos os critérios',
  'filters.unappliedFilters': 'Você tem filtros não aplicados',
  'filters.addRule': 'Adicionar critério',
  'filters.whereOperator': 'Onde',
  'filters.andOperator': 'E',
  'filters.orOperator': 'Ou',
  'filters.count.placeholder': 'Contagem',
  'filters.count.error': 'Use apenas números inteiros',
  'filters.input.placeholder': 'Texto',
  'filters.integer.placeholder': 'Inteiro',
  'filters.integer.error': 'Use apenas números inteiros',
  'filters.number.placeholder': 'Número',
  'filters.number.error': 'Use apenas números',
  'filters.tagsInput.placeholder': 'Digite o valor',
  'datatable.pagination.itemCounter.short':
    '{firstRowIndex}-{lastRowIndex} de {totalRowCount}',
  'datatable.pagination.itemCounter.full':
    '{firstRowIndex}-{lastRowIndex} de {totalRowCount} {count, plural, one {linha} other {linhas}} no total',
  'datatable.pagination.rowsPerPage': 'Linhas por página',
  'datatable.pagination.rowsPerPage.short': 'Linhas',
  'datatable.pagination.goToFirstPage': 'Ir para a primeira página da tabela',
  'datatable.pagination.goToLastPage': 'Ir para a última página da tabela',
  'datatable.pagination.goToPreviousPage':
    'Ir para a página anterior da tabela',
  'datatable.pagination.goToNextPage': 'Ir para a próxima página da tabela',
  'datatable.topToolbar.itemCounter':
    '{totalRowCount} {count, plural, one {linha} other {linhas}}',
  'datatable.topToolbar.hiddenColumns':
    '{count} {count, plural, one {coluna oculta} other {colunas ocultas}}',
  'datatable.topToolbar.columns': 'Colunas',
  'datatable.topToolbar.fullScreen': 'Tela Cheia',
  'datatable.selection.itemCounter':
    '<bold>{selectedRowCount}</bold> de {totalRowCount} {count, plural, one {linha selecionada} other {linhas selecionadas}}',
  'datatable.selection.clearSelection': 'Limpar seleção',
  'datatable.selection.toggleAll': 'Alternar selecionar todos',
  'datatable.selection.toggleRow': 'Alternar selecionar linha',
  'datatable.selection.selectAll': 'Selecionar Tudo',
  'datatable.selection.selectNone': 'Selecionar Nenhum',
  'datatable.elementCounter.selectedOf':
    '{selectedLength} de {totalLength} selecionados',
  'datatable.elementCounter.noData': 'Sem dados',
  'datatable.noMatchingData.title':
    'Nenhum item corresponde aos seus filtros atuais',
  'datatable.noMatchingData.description': 'Você pode tentar',
  'datatable.noMatchingData.list.item1':
    'usar "OR" em vez de "AND" para combinar suas consultas',
  'datatable.noMatchingData.list.item2':
    'verificar se há erros de digitação em suas consultas',
  'datatable.noData.title': 'Nenhum resultado encontrado',
  'datatable.noData.list.description': 'Isso pode acontecer porque:',
  'datatable.noData.list.emptySet': 'o conjunto de dados está vazio',
  'datatable.noData.list.activeFilters':
    'nenhum dos itens corresponde aos seus filtros ativos',
  'datatable.expanding.expandAll': 'Expandir todas as linhas',
  'datatable.expanding.collapseAll': 'Recolher todas as linhas',
  'datatable.expanding.expandRow': 'Expandir linha',
  'datatable.expanding.collapseRow': 'Recolher linha',
  'datatable.rowActions.trigger': 'Ações de linha',
  'datatable.columnActions.trigger': 'Ações de coluna',
  'datatable.columnActions.sort.ascending': 'Ordem crescente',
  'datatable.columnActions.sort.descending': 'Ordem decrescente',
  'datatable.columnActions.sort.clear': 'Limpar ordenação',
  'datatable.columnActions.hideColumn': 'Ocultar coluna',
  'datatable.columnActions.pinning.pin': 'Fixar coluna',
  'datatable.columnActions.pinning.unpin': 'Desfixar coluna',
  'datatable.columnActions.resetSize': 'Redefinir tamanho da coluna',
  'datatable.settings.title': 'Configurações de colunas',
  'datatable.settings.close': 'Fechar configurações de colunas',
  'datatable.settings.reset': 'Redefinir para o padrão',
  'datatable.settings.hiding.showAll': 'Exibir todas as colunas',
  'datatable.settings.hiding.hideAll': 'Ocultar todas as colunas',
  'datatable.settings.hiding.showColumn': 'Exibir coluna {columnName}',
  'datatable.settings.hiding.hideColumn': 'Ocultar coluna {columnName}',
  'datatable.settings.pinnig.pinAll': 'Fixar todas as colunas',
  'datatable.settings.pinnig.unpinAll': 'Desfixar todas as colunas',
  'datatable.settings.pinnig.pinColumn': 'Fixar coluna {columnName}',
  'datatable.settings.pinnig.unpinColumn': 'Desfixar coluna {columnName}',
  'datatable.settings.ordering.reorder': 'Reordenar coluna {columnName}',
  'datatable.settings.ordering.screenReader.instructions':
    'Para pegar uma coluna móvel da tabela, pressione Espaço ou Enter. Use as setas para cima e para baixo para atualizar a posição da coluna na tabela. Pressione Espaço ou Enter novamente para soltar o item em sua nova posição, ou pressione Escape para cancelar.',
  'datatable.settings.ordering.screenReader.pickedUp':
    'Coluna {header} selecionada.',
  'datatable.settings.ordering.screenReader.movedOver':
    'A coluna {activeHeader} foi movida para a coluna {overHeader}.',
  'datatable.settings.ordering.screenReader.dropped':
    'A coluna {activeHeader} foi soltada.',
  'datatable.settings.ordering.screenReader.droppedOver':
    'A coluna {activeHeader} foi soltada sobre a coluna {overHeader}',
  'datatable.settings.ordering.screenReader.dragCancel':
    'O arraste foi cancelado. A coluna {header} foi solta.',
  'datatable.settings.ordering.screenReader.notDroppableArea':
    'A coluna {activeHeader} não está mais em uma área onde pode ser solta.',
  'basetable.noData.title': 'Nenhum dado disponível',
  'basetable.noData.description': 'Não há registros para exibir.',
  'basetable.loading.title': 'Carregando dados',
  'basetable.loading.description': 'Isso pode levar alguns momentos.',
  'basetable.goToPage.label': 'Ir para a página:',
} as const;
export default locale;
