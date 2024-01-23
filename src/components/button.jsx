import PropTypes from "prop-types";

const Button = (props) => {
  return (
    <button className={`${props.className} px-6 rounded-full`}>
      {props.children}
    </button>
  );
};

Button.propTypes = {
  children: PropTypes.any,
  className: PropTypes.any,
};

export default Button;
