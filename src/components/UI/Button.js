import "./Button.css";

const Button = (props) => {
  return (
    <button type="submit">
      Add user
      {props.children}
    </button>
  );
};

export default Button;