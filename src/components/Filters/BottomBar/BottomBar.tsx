import React from 'react';
import PropTypes from 'prop-types';

import { FlexContainer } from '../../FlexContainer';
import { Paragraph } from '../../typography';
import { Button } from '../../Button';
import { BottomBarProps } from './BottomBar.types';

const BottomBar: React.FC<BottomBarProps> = ({
  onSubmit,
  onAdd,
  onClearAll,
  onClose,
  onCancel,
  isLoading = false,
  hasUnappliedFilters,
  isCancelDisabled = false,
  isApplyDisabled = false,
}) => {
  const canCancel = isLoading && !isCancelDisabled;
  return (
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
        {(hasUnappliedFilters || isLoading) && (
          <Paragraph
            as="div"
            margin={{ right: 0.8, bottom: 0 }}
            size="md"
            variant="secondary"
          >
            {isLoading ? 'Processing...' : 'You have unapplied filters'}
          </Paragraph>
        )}
        <Button
          color="primary"
          margin={{ right: 1 }}
          variant="outline"
          onClick={canCancel ? onCancel : onClose}
        >
          {canCancel ? 'Cancel' : 'Close'}
        </Button>
        <Button
          color="primary"
          disabled={isApplyDisabled}
          /* disabled={isLoading} TODO enable by https://zitenote.atlassian.net/browse/FEP-1645 */
          variant="solid"
          onClick={onSubmit}
        >
          Apply
        </Button>
      </FlexContainer>
    </FlexContainer>
  );
};

export default BottomBar;

BottomBar.propTypes = {
  hasUnappliedFilters: PropTypes.bool.isRequired,
  onSubmit: PropTypes.func.isRequired,
  onAdd: PropTypes.func.isRequired,
  onCancel: PropTypes.func.isRequired,
  onClearAll: PropTypes.func.isRequired,
  onClose: PropTypes.func.isRequired,
  isLoading: PropTypes.bool,
  isCancelDisabled: PropTypes.bool,
  isApplyDisabled: PropTypes.bool,
};
