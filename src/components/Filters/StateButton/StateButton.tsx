import styled from 'styled-components';

import { IconTypes } from '../../../theme/icons/icons.enums';
import { Icon } from '../../Icon';
import { Spinner } from '../../Spinner';
import { Padbox } from '../../layout';
import { getColor, getDepth, getRadii, pxToRem } from '../../../utils';
import { StateButtonProps } from './StateButton.types';
import { useStateButtonIcon } from '../hooks/useStateButton';
import ElementLabel from '../../ElementLabel/ElementLabel';
import { useSafeTranslation } from '../../../hooks/useSafeTranslation';

const Popup = styled(Padbox)`
  display: flex;
  position: absolute;
  visibility: hidden;
  z-index: ${getDepth('tooltip')};
  padding: ${pxToRem(8, 0, 8, 10)};
  background: ${getColor('error.500')};
  border-top-left-radius: ${getRadii('default')};
  border-bottom-left-radius: ${getRadii('default')};
  opacity: 0;
  right: calc(100%);
  top: 50%;
  transform: translateY(-50%);
`;

const RemoveButton = styled.button`
  background: transparent;
  font-family: var(--sscds-font-family-body);
  height: ${pxToRem(32)};
  flex: 0 0 ${pxToRem(32)};
  display: flex;
  align-items: center;
  justify-content: center;
  position: relative;
  border: none;
  margin: 0;

  cursor: ${({ disabled }) => !disabled && 'pointer'};

  &:hover {
    background-color: ${({ disabled }) => !disabled && getColor('error.500')};
    border-top-right-radius: ${getRadii('default')};
    border-bottom-right-radius: ${getRadii('default')};
  }

  &:hover ${Popup} {
    visibility: visible;
    opacity: 1;
  }
`;

const StateButton = ({
  index,
  onClick,
  isApplied = false,
  isLoading = false,
}: StateButtonProps) => {
  const { t } = useSafeTranslation();
  const { iconColor, iconName, handleMouseOut, handleMouseOver } =
    useStateButtonIcon(isApplied);
  return (
    <RemoveButton
      aria-label={t('sscds:filters.removeRule')}
      onClick={onClick(index)}
      onMouseOut={handleMouseOut}
      onMouseOver={handleMouseOver}
    >
      {isLoading ? (
        <Spinner borderWidth={2} height={20} width={20} dark />
      ) : (
        <Icon
          color={iconColor}
          name={iconName}
          type={IconTypes.ssc}
          hasFixedWidth
        />
      )}
      <Popup>
        <ElementLabel color="inverse" size="sm" style={{ lineHeight: '1rem' }}>
          {t('sscds:filters.removeRule')}
        </ElementLabel>
      </Popup>
    </RemoveButton>
  );
};

export default StateButton;
