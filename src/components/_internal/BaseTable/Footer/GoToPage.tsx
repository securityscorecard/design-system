import React, { useRef } from 'react';
import styled from 'styled-components';

import { pxToRem } from '../../../../utils';
import { Inline } from '../../../layout';
import { Input } from '../../../forms';
import { GoToPageProps } from './GoToPage.types';
import { SpaceSizes } from '../../../../theme';
import { Text } from '../../../Text';

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

const GoToPage = ({ pageCount, onPageChange }: GoToPageProps) => {
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
    <Inline align="center" gap={SpaceSizes.md}>
      <Text as="label" htmlFor="goToPageInput" variant="subtle">
        Go to page:
      </Text>
      <SmallInput
        ref={inputRef}
        id="goToPageInput"
        placeholder="#"
        type="number"
        onKeyDown={handlePageChange}
      />
    </Inline>
  );
};

export default GoToPage;
