import { useSafeTranslation } from '../../../../hooks/useSafeTranslation';
import { H4 } from '../../../Heading';
import Paragraph from '../../../Paragraph/Paragraph';
import { TextSizes } from '../../../Text/Text.enums';

const NoData = () => {
  const { t } = useSafeTranslation();
  return (
    <>
      <H4 margin={{ top: 0, bottom: 0.8 }}>
        {t('sscds|basetable.noData.title')}
      </H4>
      <Paragraph margin={{ bottom: 0.8 }} size={TextSizes.md}>
        {t('sscds|datatable.noRecords.title')}
      </Paragraph>
    </>
  );
};

export default NoData;
