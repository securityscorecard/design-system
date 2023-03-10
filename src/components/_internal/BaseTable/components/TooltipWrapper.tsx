import type { FC } from 'react';
import type { TooltipWrapperProps } from './TooltipWrapper.types';

import PropTypes from 'prop-types';

import { Tooltip } from '../../../Tooltip';

const TooltipWrapper: FC<TooltipWrapperProps> = ({
  popupRenderer,
  shouldRender,
  children,
}) =>
  shouldRender ? (
    <Tooltip popup={popupRenderer()}>{children}</Tooltip>
  ) : (
    // eslint-disable-next-line react/jsx-no-useless-fragment
    <>{children}</>
  );

TooltipWrapper.propTypes = {
  popupRenderer: PropTypes.func.isRequired,
  shouldRender: PropTypes.bool.isRequired,
};

export default TooltipWrapper;
