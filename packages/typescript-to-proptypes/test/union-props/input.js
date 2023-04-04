import * as React from 'react';

export default function TextField(props) {
  const { value, variant } = props;

  return (
    <>
      {variant}: <input value={value} />
    </>
  );
}
