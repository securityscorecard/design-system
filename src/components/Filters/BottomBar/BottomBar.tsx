import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

import { FlexContainer } from '../../FlexContainer';
import { Spinner } from '../../Spinner';
import { Button } from '../../Button';
import { BottomBarProps } from './BottomBar.types';
import {
  getColor,
  getFontSize,
  getFontWeight,
  getLineHeight,
  pxToRem,
} from '../../../utils/helpers';

const FiltersNotice = styled.div`
  color: ${getColor('graphite2B')};
  font-size: ${getFontSize('md')};
  line-height: ${getLineHeight('md')};
  margin-right: ${pxToRem(16)};
`;

const LoadingText = styled.span`
  font-size: ${getFontSize('md')};
  line-height: ${getLineHeight('md')};
  margin-left: ${pxToRem(8)};
  font-weight: ${getFontWeight('medium')};
`;

const BottomBar: React.FC<BottomBarProps> = ({
  onAdd,
  onClearAll,
  onApply,
  onClose,
  onCancel,
  isLoading = false,
  hasUnappliedFilters,
}) => (
  <FlexContainer justifyContent="space-between" margin={{ top: 0.5 }}>
    <FlexContainer>
      <Button
        color="primary"
        iconName="plus"
        margin={{ left: 0.5, right: 2 }}
        size="md"
        variant="text"
        onClick={onAdd}
      >
        Add
      </Button>
      <Button color="primary" size="md" variant="text" onClick={onClearAll}>
        Clear all
      </Button>
    </FlexContainer>
    <FlexContainer alignItems="center">
      {hasUnappliedFilters && (
        <FiltersNotice>You have unapplied filters</FiltersNotice>
      )}
      <Button
        color="primary"
        margin={{ right: 1 }}
        variant="outline"
        onClick={isLoading ? onCancel : onClose}
      >
        {isLoading ? 'Cancel' : 'Close'}
      </Button>
      <Button color="primary" variant="solid" onClick={onApply}>
        {isLoading ? (
          <>
            <Spinner
              borderWidth={2}
              height={16}
              verticalMargin={0}
              width={16}
            />
            <LoadingText>Fetching results</LoadingText>
          </>
        ) : (
          'Apply'
        )}
      </Button>
    </FlexContainer>
  </FlexContainer>
);

export default BottomBar;

BottomBar.propTypes = {
  hasUnappliedFilters: PropTypes.bool.isRequired,
  onAdd: PropTypes.func.isRequired,
  onClearAll: PropTypes.func.isRequired,
  onApply: PropTypes.func.isRequired,
  onClose: PropTypes.func.isRequired,
  onCancel: PropTypes.func.isRequired,
  isLoading: PropTypes.bool,
};
