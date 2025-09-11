import styled from 'styled-components';

import { pxToRem } from '../../../../utils';
import { H4 } from '../../../Heading';
import Paragraph from '../../../Paragraph/Paragraph';
import { TextSizes } from '../../../Text/Text.enums';
import { useSafeTranslation } from '../../../../hooks/useSafeTranslation';

const ListItem = styled.li`
  margin-left: ${pxToRem(16)};

  &::before {
    content: '• ';
  }
`;

const NoMatchingData = () => {
  const { t } = useSafeTranslation();
  return (
    <>
      <H4 margin={{ top: 0, bottom: 0.8 }}>
        {t('sscds|datatable.noMatchingData.title')}
      </H4>
      <Paragraph margin={{ bottom: 0.8 }} size={TextSizes.md}>
        {t('sscds|datatable.noMatchingData.description')}
      </Paragraph>
      <Paragraph as="div" margin="none" size={TextSizes.md}>
        <ul>
          <ListItem>{t('sscds|datatable.noMatchingData.list.item1')}</ListItem>
          <ListItem>{t('sscds|datatable.noMatchingData.list.item2')}</ListItem>
        </ul>
      </Paragraph>
    </>
  );
};

export default NoMatchingData;
