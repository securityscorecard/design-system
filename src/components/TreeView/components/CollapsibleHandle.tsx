import React from 'react';
import styled from 'styled-components';

import BaseHandle from '../../_internal/BaseHandle/BaseHandle';

export const IndentationPlaceholder = styled.div`
  width: 1.5rem;
  height: 1.5rem;
`;

function CollapsibleHandle({
  collapsed,
  onCollapse,
}: {
  collapsed: boolean;
  onCollapse?: () => void;
}) {
  if (typeof onCollapse === 'undefined') {
    return <IndentationPlaceholder />;
  }

  return (
    <BaseHandle
      aria-expanded={!collapsed}
      iconProps={{
        name: 'angle-right',
        rotation: collapsed ? undefined : 90,
      }}
      label={`To ${
        collapsed ? 'expand' : 'collapse'
      } nested rows, press the space bar.`}
      type="button"
      onClick={(e) => {
        e.stopPropagation();
        onCollapse();
      }}
    />
  );
}

CollapsibleHandle.displayName = 'CollapsibleHandle';

export default CollapsibleHandle;
