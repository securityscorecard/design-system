import React from 'react';
import styled from 'styled-components';

import { Padbox, Stack, Surface } from '../../layout';
import { Paragraph, Text } from '../../typographyLegacy';
import { DatatableInstance } from '../Datatable.types';
import BodyRow from './BodyRow';

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

  return (
    <tbody className="ds-table-body">
      {!rows.length ? (
        <tr style={{ display: 'flex' }}>
          <td colSpan={getVisibleLeafColumns().length} style={{ flex: 1 }}>
            <Surface background="dynamic" radius="none">
              <Padbox paddingSize="xl">
                {renderNoDataFallback?.({ table }) ?? (
                  <Stack gap="sm">
                    <Text as="p" size="h5">
                      No results found
                    </Text>
                    <Paragraph as="div" variant="secondary">
                      This may happen because:
                      <List>
                        <li>the data set is empty</li>
                        <li>none of the items match your active filters</li>
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
