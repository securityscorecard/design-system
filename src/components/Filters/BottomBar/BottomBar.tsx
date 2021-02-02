import React from 'react';
import PropTypes from 'prop-types';

import { FlexContainer } from '../../FlexContainer';
import { Button } from '../../Button';
import { BottomBarProps } from './BottomBar.types';

const BottomBar: React.FC<BottomBarProps> = ({
  onAdd,
  onClearAll,
  onApply,
  onClose,
  onCancel,
  isLoading = false,
}) => (
  <FlexContainer justifyContent="space-between">
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
    <FlexContainer>
      {/* TODO add notice about unapplied filters and style properly */}
      <Button
        color="primary"
        margin={{ right: 1 }}
        variant="outline"
        onClick={isLoading ? onCancel : onClose}
      >
        {isLoading ? 'Cancel' : 'Close'}
      </Button>
      <Button
        color="primary"
        isLoading={isLoading}
        variant="solid"
        onClick={onApply}
      >
        {isLoading ? 'Fetching results' : 'Apply'}
      </Button>
    </FlexContainer>
  </FlexContainer>
);

export default BottomBar;

BottomBar.propTypes = {
  onAdd: PropTypes.func.isRequired,
  onClearAll: PropTypes.func.isRequired,
  onApply: PropTypes.func.isRequired,
  onClose: PropTypes.func.isRequired,
  onCancel: PropTypes.func.isRequired,
  isLoading: PropTypes.bool,
};
