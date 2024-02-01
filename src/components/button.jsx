import PropTypes from "prop-types";

const Button = (props) => {
  return (
    <button
      className={`${props.className} px-6 rounded-full`}
      onClick={props.onClick}
      name={props.name}
    >
      {props.children}
    </button>
  );
};

Button.propTypes = {
  children: PropTypes.any,
  className: PropTypes.any,
  onClick: PropTypes.any,
  name: PropTypes.any,
};

export default Button;
