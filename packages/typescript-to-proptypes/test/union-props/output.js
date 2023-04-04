import * as React from 'react';
import PropTypes from 'prop-types';

function TextField(props) {
  const { value, variant } = props;

  return (
    <>
      {variant}: <input value={value} />
    </>
  );
}

TextField.propTypes = {
  value: PropTypes.any,
  variant: PropTypes.oneOf(['filled', 'outlined', 'standard']),
};

export default TextField;
