import React from 'react';

import BaseHandle, {
  BaseHandlePlaceholder,
} from '../../_internal/BaseHandle/BaseHandle';

function CollapsibleHandle({
  collapsed,
  onCollapse,
}: {
  collapsed: boolean;
  onCollapse?: () => void;
}) {
  if (typeof onCollapse === 'undefined') {
    return <BaseHandlePlaceholder />;
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
      onClick={onCollapse}
    />
  );
}

CollapsibleHandle.displayName = 'CollapsibleHandle';

export default CollapsibleHandle;
