import type { TooltipWrapperProps } from './TooltipWrapper.types';

import { Tooltip } from '../../../Tooltip';

const TooltipWrapper = ({
  popupRenderer,
  shouldRender,
  children,
}: TooltipWrapperProps) =>
  shouldRender ? (
    <Tooltip popup={popupRenderer()}>{children}</Tooltip>
  ) : (
    // eslint-disable-next-line react/jsx-no-useless-fragment
    <>{children}</>
  );

export default TooltipWrapper;
