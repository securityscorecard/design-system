import styled from 'styled-components';

import { createMarginSpacing } from '../../../utils';

const FormFieldWrapper = styled.div`
  ${createMarginSpacing({ bottom: 0.75 })};

  &:last-of-type {
    margin-bottom: 0;
  }
`;

FormFieldWrapper.displayName = 'FormFieldWrapper';

export default FormFieldWrapper;
