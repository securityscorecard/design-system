import PropTypes from 'prop-types';

export interface NumberProps {
  value: string;
  onChange: () => void;
  min?: number;
  max?: number;
}

export const NumberPropTypes = {
  onChange: PropTypes.func.isRequired,
  value: PropTypes.string,
  min: PropTypes.number,
  max: PropTypes.number,
};
