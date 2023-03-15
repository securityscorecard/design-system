import styled from 'styled-components';
import PropTypes from 'prop-types';
import { prop } from 'ramda';

import { createSpacings } from '../../utils';
import { FlexContainerProps } from './FlexContainer.types';

const FlexContainer = styled.div<FlexContainerProps>`
  display: flex;
  align-items: ${prop('alignItems')};
  justify-content: ${prop('justifyContent')};
  flex-direction: ${prop('flexDirection')};
  flex-grow: ${prop('flexGrow')};
  flex-shrink: ${prop('flexShrink')};
  flex-wrap: ${prop('flexWrap')};
  ${createSpacings};
`;

FlexContainer.propTypes = {
  alignItems: PropTypes.oneOf([
    'inherit',
    '-moz-initial',
    'initial',
    'revert',
    'unset',
    'center',
    'end',
    'flex-end',
    'flex-start',
    'self-end',
    'self-start',
    'start',
    'baseline',
    'normal',
    'stretch',
  ]),
  justifyContent: PropTypes.oneOf([
    'inherit',
    '-moz-initial',
    'initial',
    'revert',
    'unset',
    'center',
    'end',
    'flex-end',
    'flex-start',
    'start',
    'normal',
    'stretch',
    'space-around',
    'space-between',
    'space-evenly',
    'left',
    'right',
  ]),
  flexDirection: PropTypes.oneOf([
    'inherit',
    '-moz-initial',
    'initial',
    'unset',
    'revert',
    'column',
    'column-reverse',
    'row',
    'row-reverse',
  ]),
  flexGrow: PropTypes.oneOfType([
    PropTypes.number,
    PropTypes.oneOf<
      'inherit' | '-moz-initial' | 'initial' | 'revert' | 'unset'
    >(['inherit', '-moz-initial', 'initial', 'revert', 'unset']),
  ]),
  flexShrink: PropTypes.oneOfType([
    PropTypes.number,
    PropTypes.oneOf<
      'inherit' | '-moz-initial' | 'initial' | 'revert' | 'unset'
    >(['inherit', '-moz-initial', 'initial', 'revert', 'unset']),
  ]),
  flexWrap: PropTypes.oneOf([
    'inherit',
    '-moz-initial',
    'initial',
    'revert',
    'unset',
    'nowrap',
    'wrap',
    'wrap-reverse',
  ]),
};

export default FlexContainer;
