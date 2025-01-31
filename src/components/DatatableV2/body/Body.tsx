import styled from 'styled-components';

import { Padbox, Stack, Surface } from '../../layout';
import Paragraph from '../../Paragraph/Paragraph';
import { Text } from '../../Text';
import { DatatableInstance } from '../Datatable.types';
import BodyRow from './BodyRow';
import { useSafeTranslation } from '../../../hooks/useSafeTranslation';

const List = styled.ul`
  list-style-type: initial;
  padding-inline-start: 1.5rem;
`;

const Body = <D,>({ table }: { table: DatatableInstance<D> }) => {
  const {
    getRowModel,
    getVisibleLeafColumns,
    options: { renderNoDataFallback },
  } = table;
  const { rows } = getRowModel();
  const { t } = useSafeTranslation();

  return (
    <tbody className="ds-table-body">
      {!rows.length ? (
        <tr style={{ display: 'flex' }}>
          <td colSpan={getVisibleLeafColumns().length} style={{ flex: 1 }}>
            <Surface radius="none">
              <Padbox paddingSize="xl">
                {renderNoDataFallback?.({ table }) ?? (
                  <Stack gap="sm">
                    <Text as="p" size="lg" isBold>
                      {t('sscds|datatable.noData.title')}
                    </Text>
                    <Paragraph as="div" variant="secondary">
                      {t('sscds|datatable.noData.list.description')}
                      <List>
                        <li>{t('sscds|datatable.noData.list.emptySet')}</li>
                        <li>
                          {t('sscds|datatable.noData.list.activeFilters')}
                        </li>
                      </List>
                    </Paragraph>
                  </Stack>
                )}
              </Padbox>
            </Surface>
          </td>
        </tr>
      ) : (
        rows.map((row) => <BodyRow key={row.id} row={row} table={table} />)
      )}
    </tbody>
  );
};

export default Body;
