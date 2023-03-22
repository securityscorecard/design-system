import { endsWith } from 'ramda';

import { Table, TableBody, TableHead, Token } from './components';

export const SpaceScale = ({ scale }) => {
  const sizes = Object.keys(scale);
  return (
    <Table>
      <TableHead>
        <tr>
          <th>Size</th>
          <th>rem</th>
          <th>px</th>
          <th>Example</th>
        </tr>
      </TableHead>
      <TableBody>
        {sizes.map((size) => (
          <tr key={size}>
            <td>
              <Token>theme.space.{size}</Token>
            </td>
            <td>{scale[size] / 16}</td>
            <td>{scale[size]}</td>
            <td>
              <div
                style={{
                  width: `${scale[size]}px`,
                  height: `${scale[size]}px`,
                  backgroundColor: endsWith('Plus', size)
                    ? '#FF79C9'
                    : '#0275D8',
                }}
              />
            </td>
          </tr>
        ))}
      </TableBody>
    </Table>
  );
};
