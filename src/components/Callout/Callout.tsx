import type { FC } from 'react';
import type { CalloutProps } from './Callout.types';
import type { SSCIcons } from '../Icon/Icon.types';

import styled from 'styled-components';
import PropTypes from 'prop-types';

import { ColorTypes, SpaceSizes } from '../../theme';
import { getColor, getFontSize, getRadii, pxToRem } from '../../utils';
import { Inline, Padbox } from '../layout';
import { Text } from '../typographyLegacy';
import { Icon } from '../Icon';
import { TextSizes } from '../typographyLegacy/Text/Text.enums';
import { SSCIconNames } from '../../theme/icons/icons.enums';
import { CLX_COMPONENT } from '../../theme/constants';

const IconContainer = styled.div`
  width: ${pxToRem(36)};
  height: ${pxToRem(36)};
  flex-shrink: 0;
  background-color: ${getColor(ColorTypes.info700)};
  border-radius: ${getRadii('circle')};
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: ${getFontSize('mdPlus')};
`;

const Container = styled(Padbox)`
  background-color: ${getColor(ColorTypes.info50)};
  border-radius: ${getRadii('default')};
`;

const Callout: FC<CalloutProps> = ({
  children,
  icon = SSCIconNames.lightbulb,
}) => (
  <Container className={CLX_COMPONENT} paddingSize={SpaceSizes.md}>
    <Inline gap={SpaceSizes.md}>
      <IconContainer>
        {typeof icon === 'string' ? (
          <Icon color={ColorTypes.neutral0} name={icon} />
        ) : (
          icon
        )}
      </IconContainer>
      <Text size={TextSizes.lg} style={{ alignSelf: 'center' }}>
        {children}
      </Text>
    </Inline>
  </Container>
);

Callout.propTypes /* remove-proptypes */ = {
  //
  // =============== WARNING ================
  // | These PropTypes are auto-generated   |
  // | from the TypeScript type definitions  |
  // ========================================
  //
  icon: PropTypes.oneOfType([
    PropTypes.element.isRequired,
    PropTypes.number.isRequired,
    PropTypes.shape({}).isRequired,
    PropTypes.shape({
      '__@iterator@393': PropTypes.func.isRequired,
      '__@unscopables@719': PropTypes.func.isRequired,
      at: PropTypes.func.isRequired,
      concat: PropTypes.func.isRequired,
      copyWithin: PropTypes.func.isRequired,
      entries: PropTypes.func.isRequired,
      every: PropTypes.func.isRequired,
      fill: PropTypes.func.isRequired,
      filter: PropTypes.func.isRequired,
      find: PropTypes.func.isRequired,
      findIndex: PropTypes.func.isRequired,
      flat: PropTypes.func.isRequired,
      flatMap: PropTypes.func.isRequired,
      forEach: PropTypes.func.isRequired,
      includes: PropTypes.func.isRequired,
      indexOf: PropTypes.func.isRequired,
      join: PropTypes.func.isRequired,
      keys: PropTypes.func.isRequired,
      lastIndexOf: PropTypes.func.isRequired,
      length: PropTypes.number.isRequired,
      map: PropTypes.func.isRequired,
      pop: PropTypes.func.isRequired,
      push: PropTypes.func.isRequired,
      reduce: PropTypes.func.isRequired,
      reduceRight: PropTypes.func.isRequired,
      reverse: PropTypes.func.isRequired,
      shift: PropTypes.func.isRequired,
      slice: PropTypes.func.isRequired,
      some: PropTypes.func.isRequired,
      sort: PropTypes.func.isRequired,
      splice: PropTypes.func.isRequired,
      toLocaleString: PropTypes.func.isRequired,
      toString: PropTypes.func.isRequired,
      unshift: PropTypes.func.isRequired,
      values: PropTypes.func.isRequired,
    }).isRequired,
    PropTypes.string.isRequired,
    PropTypes.bool.isRequired,
  ]).isRequired,
} as any;

export default Callout;
