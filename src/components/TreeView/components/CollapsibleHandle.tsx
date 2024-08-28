import styled from 'styled-components';

import IconButton from '../../ButtonV2/IconButton';

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
    <IconButton
      aria-expanded={!collapsed}
      iconName="angle-right"
      iconRotation={collapsed ? undefined : 90}
      label={`To ${
        collapsed ? 'expand' : 'collapse'
      } nested rows, press the space bar.`}
      size="sm"
      variant="ghost"
      onClick={(e) => {
        e.stopPropagation();
        onCollapse();
      }}
    />
  );
}

CollapsibleHandle.displayName = 'CollapsibleHandle';

export default CollapsibleHandle;
