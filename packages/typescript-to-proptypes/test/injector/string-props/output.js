import PropTypes from 'prop-types';

function Dialog(props) {
  const { 'aria-describedby': ariaDescribedby } = props;
  return <div />;
}

Dialog.propTypes = {
  'aria-describedby': PropTypes.string.isRequired,
};

export default Dialog;
