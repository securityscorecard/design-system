import type { FC, KeyboardEvent } from 'react';
import type { GoToPageProps } from './GoToPage.types';

import { useRef } from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

import {
  getColor,
  getFontSize,
  getFontWeight,
  pxToRem,
} from '../../../../utils';
import { Inline } from '../../../layout';
import { Input } from '../../../forms';
import { SpaceSizes } from '../../../../theme';

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
const GoToPageLabel = styled.label`
  margin-bottom: 0;
  margin-right: ${pxToRem(16)};
  font-size: ${getFontSize('lg')};
  font-weight: ${getFontWeight('medium')};
  color: ${getColor('neutral.700')};
`;

const GoToPage: FC<GoToPageProps> = ({ pageCount, onPageChange }) => {
  const inputRef = useRef<HTMLInputElement>(null);
  const handlePageChange = (e: KeyboardEvent<HTMLInputElement>) => {
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
      <GoToPageLabel htmlFor="goToPageInput">Go to page:</GoToPageLabel>
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

GoToPage.propTypes = {
  pageCount: PropTypes.number.isRequired,
  onPageChange: PropTypes.func.isRequired,
};

export default GoToPage;
