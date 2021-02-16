import PropTypes from 'prop-types';

export interface NumberProps {
  value: string;
  onChange: () => void;
}

export const NumberPropTypes = {
  onChange: PropTypes.func.isRequired,
  value: PropTypes.string,
};
