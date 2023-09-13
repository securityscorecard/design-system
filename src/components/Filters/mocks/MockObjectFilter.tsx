import React, { useState } from 'react';
import { always } from 'ramda';

import { SpaceSizes } from '../../../theme';
import { Inline, Padbox } from '../../layout';
import { InputFilter, SelectFilter } from '../components';

type MockObject = {
  inputValue: string;
  includeAssets: string[];
};

interface MockObjectFilterProps {
  value: MockObject;
}

const MockObjectFilter: React.FC<MockObjectFilterProps> = ({ value }) => {
  const [ipValue, setIpValue] = useState(value?.inputValue);
  const options = [
    {
      label: 'Include associated subdomains',
      value: 'include_domains',
    },
    {
      label: 'Include associated IPs',
      value: 'include_ips',
    },
  ];

  const handleOnChange = (event) => {
    const { target } = event;
    setIpValue(target.value);
  };
  const validate = always(false);
  const handleOnError = () => {
    // do nothing
  };

  return (
    <Padbox>
      <Inline gap={SpaceSizes.sm} stretch="all">
        <InputFilter
          placeholder="IP"
          value={ipValue}
          onChange={handleOnChange}
          onError={handleOnError}
          onValidate={validate}
        />
        <SelectFilter options={options} isMulti />
      </Inline>
    </Padbox>
  );
};
export default MockObjectFilter;
