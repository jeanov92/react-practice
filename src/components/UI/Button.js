import "./Button.css";

const Button = (props) => {
  return (
    <button type="submit" className={`button ${props.isValid ? '': 'invalid' }`}  disabled={!props.isValid}>
      Add user
      {props.children}
    </button>
  );
};

export default Button;