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

const BottomBar = ({
  onSubmit,
  onAdd,
  onClearAll,
  onClose,
  onCancel,
  isCancelEnabled = true,
  isLoading = false,
  hasUnappliedFilters,
  isApplyDisabled = false,
  hasCloseButton,
  hasApplyButton = true,
}: BottomBarProps) => {
  const canCancel = isCancelEnabled && isLoading;
  return (
    <Inline gap={SpaceSizes.lg} justify="space-between">
      <Inline gap={SpaceSizes.lg}>
        <AddFilterButton
          color="primary"
          iconStart={{ name: 'plus' }}
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
        {hasUnappliedFilters && hasApplyButton && (
          <Paragraph as="div" margin="none" size="md" variant="secondary">
            You have unapplied filters
          </Paragraph>
        )}
        {canCancel && hasApplyButton ? (
          <Button color="primary" variant="outline" onClick={onCancel}>
            Cancel
          </Button>
        ) : hasCloseButton ? (
          <Button color="primary" variant="outline" onClick={onClose}>
            Close
          </Button>
        ) : null}
        {hasApplyButton && (
          <Button
            color="primary"
            isDisabled={isApplyDisabled}
            isLoading={canCancel}
            variant="solid"
            onClick={onSubmit}
          >
            Apply
          </Button>
        )}
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
  isCancelEnabled: PropTypes.bool,
  isLoading: PropTypes.bool,
  isApplyDisabled: PropTypes.bool,
  hasCloseButton: PropTypes.bool,
  hasApplyButton: PropTypes.bool,
};
