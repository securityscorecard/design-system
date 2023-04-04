import PropTypes from 'prop-types';

function Foo(props) {
  return <div {...props} />;
}

Foo.propTypes = {
  className: PropTypes.string.isRequired,
};

export default Foo;
