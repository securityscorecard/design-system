import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';

import {
  getBorderRadius,
  getColor,
  getFontSize,
  getLineHeight,
  pxToRem,
} from '../../../utils';
import { SpaceSizes } from '../../../theme';
import { Inline, Padbox } from '../../layout';
import { PaddingTypes } from '../../layout/Padbox/Padbox.enums';
import { Icon } from '../../Icon';
import { SSCIconNames } from '../../../theme/icons/icons.enums';
import { MultiValueProps, PillLabelProps } from './MultiValueInput.types';

const Pill = styled(Padbox)`
  min-width: 0;
  background-color: ${getColor('graphite2H')};
  border-radius: calc(${getBorderRadius} / 2);
`;

const PillLabel = styled.div<PillLabelProps>`
  /* desired length + 2 chars for ellipsis */
  max-width: ${({ $maxLength }) => `${$maxLength + 2}ch`};
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
  font-size: ${getFontSize('md')};
  line-height: ${getLineHeight('md')};
  color: ${getColor('graphite4B')};
`;

const PillRemove = styled.button`
  display: flex;
  justify-content: center;
  appearance: none;
  border: 0 none;
  background: transparent;
  width: ${pxToRem(16)};
  font-size: ${pxToRem(12)};
  line-height: ${getLineHeight('md')};
  color: ${getColor('graphite2B')};
  cursor: pointer;

  &:hover,
  &:focus {
    color: ${getColor('strawberry')};
  }
`;

const MultiValue: React.FC<MultiValueProps> = ({
  label,
  isDisabled,
  onRemove,
  maxLength,
}) => {
  const handleRemoveOnKeyDown: React.KeyboardEventHandler<HTMLInputElement> = (
    e,
  ) => {
    switch (e.key) {
      case ' ':
      case 'Enter':
        e.preventDefault();
        onRemove();
        // inputRef.focus();
        break;
      default:
    }
  };
  return (
    <Pill paddingSize={SpaceSizes.sm} paddingType={PaddingTypes.squish}>
      <Inline align="center" gap={SpaceSizes.xs}>
        <PillLabel $maxLength={maxLength} title={label}>
          {label}
        </PillLabel>
        {!isDisabled && (
          <PillRemove
            aria-label={`Remove ${label}`}
            type="button"
            onClick={onRemove}
            onKeyDown={handleRemoveOnKeyDown}
          >
            <Icon name={SSCIconNames.times} />
          </PillRemove>
        )}
      </Inline>
    </Pill>
  );
};

MultiValue.propTypes = {
  label: PropTypes.string.isRequired,
  isDisabled: PropTypes.bool.isRequired,
  maxLength: PropTypes.number.isRequired,
  onRemove: PropTypes.func.isRequired,
};

export default MultiValue;
