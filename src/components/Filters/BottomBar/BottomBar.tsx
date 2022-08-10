import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

import { Inline } from '../../layout';
import { Paragraph } from '../../typographyLegacy';
import { Button } from '../../Button';
import { BottomBarProps } from './BottomBar.types';
import { getSpace } from '../../../utils';
import { SpaceSizes } from '../../../theme';

const AddFilterButton = styled(Button)`
  padding-left: ${getSpace(SpaceSizes.sm)};
`;

const BottomBar: React.FC<BottomBarProps> = ({
  onSubmit,
  onAdd,
  onClearAll,
  onClose,
  onCancel,
  isCancelDisabled = false,
  isLoading = false,
  hasUnappliedFilters,
  isApplyDisabled = false,
}) => {
  const canCancel = !isCancelDisabled && isLoading;
  return (
    <Inline gap={SpaceSizes.lg} justify="space-between">
      <Inline gap={SpaceSizes.lg}>
        <AddFilterButton
          color="primary"
          iconName="plus"
          margin={{ left: 0.5, right: 2 }}
          variant="text"
          onClick={onAdd}
        >
          Add criteria
        </AddFilterButton>
        <Button color="primary" variant="text" onClick={onClearAll}>
          Clear all criteria
        </Button>
      </Inline>
      <Inline align="center" gap={SpaceSizes.md}>
        {hasUnappliedFilters && (
          <Paragraph as="div" size="md" variant="secondary">
            You have unapplied filters
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
          isDisabled={isApplyDisabled}
          isLoading={canCancel}
          variant="solid"
          onClick={onSubmit}
        >
          Apply
        </Button>
      </Inline>
    </Inline>
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
  isCancelDisabled: PropTypes.bool,
  isLoading: PropTypes.bool,
  isApplyDisabled: PropTypes.bool,
};
