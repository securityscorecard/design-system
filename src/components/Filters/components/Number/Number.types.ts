import PropTypes from 'prop-types';

export interface NumberProps {
  value: string;
  onChange: (event: React.ReactEventHandler) => void;
  min?: number;
  max?: number;
  placeholder?: string;
  errorMessage?: string;
  isInvalid?: boolean;
  onError?: (boolean) => void;
}

export const NumberPropTypes = {
  onChange: PropTypes.func.isRequired,
  value: PropTypes.string,
  min: PropTypes.number,
  max: PropTypes.number,
  placeholder: PropTypes.string,
  errorMessage: PropTypes.string,
  isInvalid: PropTypes.bool,
  onError: PropTypes.func,
};
