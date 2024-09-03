import { Inline } from '../../layout';
import { Paragraph } from '../../Paragraph';
import { BottomBarProps } from './BottomBar.types';
import Button from '../../ButtonV2/Button';

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
    <Inline gap="lg" justify="space-between">
      <Inline gap="sm">
        <Button
          color="primary"
          iconStart={{ name: 'plus' }}
          size="sm"
          variant="ghost"
          onClick={onAdd}
        >
          Add criteria
        </Button>
        <Button size="sm" variant="ghost" onClick={onClearAll}>
          Clear all criteria
        </Button>
      </Inline>
      <Inline align="center" gap="sm">
        {hasUnappliedFilters && hasApplyButton && (
          <Paragraph as="div" margin="none" size="md" variant="secondary">
            You have unapplied filters
          </Paragraph>
        )}
        {canCancel && hasApplyButton ? (
          <Button size="sm" variant="subtle" onClick={onCancel}>
            Cancel
          </Button>
        ) : hasCloseButton ? (
          <Button size="sm" variant="subtle" onClick={onClose}>
            Close
          </Button>
        ) : null}
        {hasApplyButton && (
          <Button
            isDisabled={isApplyDisabled}
            isLoading={canCancel}
            size="sm"
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
