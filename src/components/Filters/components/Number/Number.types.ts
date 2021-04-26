import PropTypes from 'prop-types';

export interface NumberProps {
  value: string;
  onChange: (event: React.ReactEventHandler) => void;
  min?: number;
  max?: number;
  placeholder?: string;
  errorMessage?: string;
  onError?: (boolean) => void;
}

export const NumberPropTypes = {
  onChange: PropTypes.func.isRequired,
  value: PropTypes.string,
  min: PropTypes.number,
  max: PropTypes.number,
  placeholder: PropTypes.string,
  errorMessage: PropTypes.string,
  onError: PropTypes.func,
};
