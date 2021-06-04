import React, { useRef } from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

import { getFontWeight, pxToRem } from '../../../../utils';
import { FlexContainer } from '../../../FlexContainer';
import { Input, Label } from '../../../forms';
import { GoToPageProps } from './GoToPage.types';

const SmallInput = styled(Input)`
  padding: ${pxToRem(8, 16)};
  width: ${pxToRem(72)};
  height: ${pxToRem(32)};
  appearance: textfield;

  &::-webkit-outer-spin-button,
  &::-webkit-inner-spin-button {
    appearance: none;
    margin: 0;
  }

  &:focus {
    padding: ${pxToRem(7, 15)};
  }
`;
const GoToPageLabel = styled(Label)`
  margin-bottom: 0;
  margin-right: ${pxToRem(16)};
  font-weight: ${getFontWeight('medium')};
`;

const GoToPage: React.FC<GoToPageProps> = ({ pageCount, onPageChange }) => {
  const inputRef = useRef<HTMLInputElement>(null);
  const handlePageChange = (e: React.KeyboardEvent<HTMLInputElement>) => {
    const { target, key } = e;
    const { value } = target as HTMLInputElement;
    const parsedValue = parseInt(value, 10);

    if (key !== 'Enter') return;

    if (parsedValue <= 0) {
      onPageChange(1);
      inputRef.current.value = '1';
    } else if (parsedValue > pageCount) {
      onPageChange(pageCount);
      inputRef.current.value = pageCount.toString();
    } else {
      onPageChange(parsedValue);
    }
  };

  return (
    <FlexContainer alignItems="center">
      <GoToPageLabel htmlFor="goToPageInput">Go to page:</GoToPageLabel>
      <SmallInput
        ref={inputRef}
        id="goToPageInput"
        placeholder="#"
        type="number"
        onKeyDown={handlePageChange}
      />
    </FlexContainer>
  );
};

GoToPage.propTypes = {
  pageCount: PropTypes.number.isRequired,
  onPageChange: PropTypes.func.isRequired,
};

export default GoToPage;
