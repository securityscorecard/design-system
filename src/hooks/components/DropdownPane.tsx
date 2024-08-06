import PropTypes from 'prop-types';
import styled from 'styled-components';

import { getColor, getRadii } from '../../utils';
import { useOuterClick } from '../useOuterCallback';
import { DropdownPaneProps, DropdownPaneStyles } from './DropdownPane.types';

export const StyledDropdownPane = styled.div<DropdownPaneStyles>`
  position: absolute;
  background: ${getColor('neutral.0')};
  color: ${getColor('neutral.900')};
  font-family: var(--sscds-font-family-body);
  font-size: var(--sscds-font-size-body-md);
  line-height: var(--sscds-font-lineheight-body-md);
  border: 1px solid ${getColor('neutral.300')};
  border-radius: ${getRadii('default')};

  ${({ $isElevated }) =>
    $isElevated && `box-shadow: 0 2px 6px 0 var(--sscds-slateA-slateA8)`};
`;

const DropdownPane = ({
  children,
  onClickOut,
  isElevated = false,
  ...props
}: DropdownPaneProps) => {
  const dropdownPaneRef = useOuterClick<HTMLDivElement>(onClickOut);

  return (
    <StyledDropdownPane
      ref={dropdownPaneRef}
      $isElevated={isElevated}
      {...props}
    >
      {children}
    </StyledDropdownPane>
  );
};

DropdownPane.propTypes = {
  onClickOut: PropTypes.func.isRequired,
  isElevated: PropTypes.bool,
};

export default DropdownPane;
