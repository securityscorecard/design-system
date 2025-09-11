/* eslint-disable filenames/match-exported */
const locale = {
  loading: 'Cargando',
  'filters.apply': 'Aplicar',
  'filters.close': 'Cerrar',
  'filters.cancel': 'Cancelar',
  'filters.removeRule': 'Eliminar',
  'filters.clearRules': 'Borrar todos los criterios',
  'filters.unappliedFilters': 'Tiene filtros sin aplicar',
  'filters.addRule': 'Añadir criterio',
  'filters.whereOperator': 'Donde',
  'filters.andOperator': 'Y',
  'filters.orOperator': 'O',
  'filters.count.placeholder': 'Total',
  'filters.count.error': 'Use solo números enteros',
  'filters.input.placeholder': 'Texto',
  'filters.integer.placeholder': 'Entero',
  'filters.integer.error': 'Use solo números enteros',
  'filters.number.placeholder': 'Número',
  'filters.number.error': 'Use solo números',
  'filters.tagsInput.placeholder': 'Ingrese el valor',
  'datatable.pagination.itemCounter.short':
    '{firstRowIndex}-{lastRowIndex} de {totalRowCount}',
  'datatable.pagination.itemCounter.full':
    '{firstRowIndex}-{lastRowIndex} de {totalRowCount} {count, plural, one {fila en total} other {filas en total}}',
  'datatable.pagination.rowsPerPage': 'Filas por página',
  'datatable.pagination.rowsPerPage.short': 'Filas',
  'datatable.pagination.goToFirstPage': 'Ir a la primera página de la tabla',
  'datatable.pagination.goToLastPage': 'Ir a la última página de la tabla',
  'datatable.pagination.goToPreviousPage':
    'Ir a la página anterior de la tabla',
  'datatable.pagination.goToNextPage': 'Ir a la página siguiente de la tabla',
  'datatable.topToolbar.itemCounter':
    '{count, plural, one {# fila} other {# filas}}',
  'datatable.topToolbar.hiddenColumns':
    '{count, plural, one {# columna oculta} other {# columnas ocultas}}',
  'datatable.topToolbar.columns': 'Columnas',
  'datatable.topToolbar.fullScreen': 'Pantalla completa',
  'datatable.selection.itemCounter':
    '<bold>{selectedRowCount}</bold> de {totalRowCount} {count, plural, one {fila seleccionada} other {filas seleccionadas}}',
  'datatable.selection.clearSelection': 'Borrar selección',
  'datatable.selection.toggleAll': 'Alternar selección de todas',
  'datatable.selection.toggleRow': 'Alternar selección de la fila',
  'datatable.selection.selectAll': 'Seleccionar Todo',
  'datatable.selection.selectNone': 'Seleccionar Ninguno',
  'datatable.elementCounter.selectedOf':
    '{selectedLength} de {totalLength} seleccionados',
  'datatable.elementCounter.noData': 'Sin datos',
  'datatable.noMatchingData.title':
    'Ningún elemento coincide con sus filtros actuales',
  'datatable.noMatchingData.description': 'Podría intentar',
  'datatable.noMatchingData.list.item1':
    'usar "OR" en lugar de "AND" para combinar sus consultas',
  'datatable.noMatchingData.list.item2':
    'revisar sus consultas en busca de errores tipográficos',
  'datatable.noData.title': 'No se han encontrado resultados',
  'datatable.noData.list.description': 'Esto puede ocurrir por:',
  'datatable.noData.list.emptySet': 'el conjunto de datos está vacío',
  'datatable.noData.list.activeFilters':
    'ninguno de los elementos coincide con sus filtros activos',
  'datatable.expanding.expandAll': 'Expandir todas las filas',
  'datatable.expanding.collapseAll': 'Contraer todas las filas',
  'datatable.expanding.expandRow': 'Expandir fila',
  'datatable.expanding.collapseRow': 'Contraer fila',
  'datatable.rowActions.trigger': 'Acciones de fila',
  'datatable.columnActions.trigger': 'Acciones de columna',
  'datatable.columnActions.sort.ascending': 'Ordenar ascendente',
  'datatable.columnActions.sort.descending': 'Ordenar descendente',
  'datatable.columnActions.sort.clear': 'Limpiar orden',
  'datatable.columnActions.hideColumn': 'Ocultar columna',
  'datatable.columnActions.pinning.pin': 'Fijar columna',
  'datatable.columnActions.pinning.unpin': 'Desfijar columna',
  'datatable.columnActions.resetSize': 'Restablecer tamaño de columna',
  'datatable.settings.title': 'Configuración de columnas',
  'datatable.settings.close': 'Cerrar configuración de columnas',
  'datatable.settings.reset': 'Restablecer a predeterminado',
  'datatable.settings.hiding.showAll': 'Mostrar todas las columnas',
  'datatable.settings.hiding.hideAll': 'Ocultar todas las columnas',
  'datatable.settings.hiding.showColumn': 'Mostrar columna {columnName}',
  'datatable.settings.hiding.hideColumn': 'Ocultar columna {columnName}',
  'datatable.settings.pinnig.pinAll': 'Fijar todas las columnas',
  'datatable.settings.pinnig.unpinAll': 'Desfijar todas las columnas',
  'datatable.settings.pinnig.pinColumn': 'Fijar columna {columnName}',
  'datatable.settings.pinnig.unpinColumn': 'Desfijar columna {columnName}',
  'datatable.settings.ordering.reorder': 'Reordenar columna {columnName}',
  'datatable.settings.ordering.screenReader.instructions':
    'Para recoger una columna de la tabla, presiona Espacio o Intro. Usa las flechas arriba y abajo para actualizar la posición de la columna en la tabla. Presiona Espacio o Intro nuevamente para soltar el elemento en su nueva posición, o presiona Escape para cancelar.',
  'datatable.settings.ordering.screenReader.pickedUp':
    'Se recogió la columna {header}.',
  'datatable.settings.ordering.screenReader.movedOver':
    'La columna {activeHeader} se movió sobre la columna {overHeader}.',
  'datatable.settings.ordering.screenReader.dropped':
    'La columna {activeHeader} se soltó.',
  'datatable.settings.ordering.screenReader.droppedOver':
    'La columna {activeHeader} se soltó sobre la columna {overHeader}',
  'datatable.settings.ordering.screenReader.dragCancel':
    'Se canceló el arrastre. La columna {header} se soltó.',
  'datatable.settings.ordering.screenReader.notDroppableArea':
    'La columna {activeHeader} ya no está sobre un área donde se puede soltar.',
  'basetable.noData.title': 'No hay datos disponibles',
  'basetable.noData.description': 'No hay registros para mostrar.',
  'basetable.loading.title': 'Cargando datos',
  'basetable.loading.description': 'Esto puede tomar unos momentos.',
  'basetable.goToPage.label': 'Ir a la página:',
  cancel: 'Cancelar',
} as const;
export default locale;
