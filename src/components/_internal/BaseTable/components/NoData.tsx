import { H4 } from '../../../Heading';
import Paragraph from '../../../Paragraph/Paragraph';
import { TextSizes } from '../../../Text/Text.enums';

const NoData = () => (
  <>
    <H4 margin={{ top: 0, bottom: 0.8 }}>No data available</H4>
    <Paragraph margin={{ bottom: 0.8 }} size={TextSizes.md}>
      There are no records in this database.
    </Paragraph>
  </>
);

export default NoData;
