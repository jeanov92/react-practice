import Button from "../UI/Button";
import styles from "./UserForm.module.css";

const AddUser = (props) => {
  const userHandler = (event) => {
    props.onUserAdded(event);
  };

  return (
    <form className={styles.form} onSubmit={userHandler}>
      <label htmlFor="username">Username</label>
      <input id="username" type="text"></input>
      <label htmlFor="age">Age</label>
      <input id="age" type="number"></input>
      <Button></Button>
    </form>
  );
};

export default AddUser;
