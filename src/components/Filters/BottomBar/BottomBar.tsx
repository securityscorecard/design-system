import { Inline } from '../../layout';
import Paragraph from '../../Paragraph/Paragraph';
import { BottomBarProps } from './BottomBar.types';
import Button from '../../ButtonV2/Button';
import { useSafeTranslation } from '../../../hooks/useSafeTranslation';

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
  const { t } = useSafeTranslation();
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
          {t('sscds|filters.addRule')}
        </Button>
        <Button size="sm" variant="ghost" onClick={onClearAll}>
          {t('sscds|filters.clearRules')}
        </Button>
      </Inline>
      <Inline align="center" gap="sm">
        {hasUnappliedFilters && hasApplyButton && (
          <Paragraph as="div" margin="none" size="md" variant="secondary">
            {t('sscds|filters.unappliedFilters')}
          </Paragraph>
        )}
        {canCancel && hasApplyButton ? (
          <Button size="sm" variant="subtle" onClick={onCancel}>
            {t('sscds|filters.cancel')}
          </Button>
        ) : hasCloseButton ? (
          <Button size="sm" variant="subtle" onClick={onClose}>
            {t('sscds|filters.close')}
          </Button>
        ) : null}
        {hasApplyButton && (
          <Button
            isDisabled={isApplyDisabled}
            isLoading={canCancel}
            loadingText={t('sscds|loading')}
            size="sm"
            onClick={onSubmit}
          >
            {t('sscds|filters.apply')}
          </Button>
        )}
      </Inline>
    </Inline>
  );
};

export default BottomBar;
