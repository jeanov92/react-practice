import React, { useState } from "react";
import Button from "../UI/Button";
import ErrorModal from "../UI/ErrorModal";
import styles from "./UserForm.module.css";

const AddUser = (props) => {
  const [isValid, setIsValid] = useState(true);
  const [usernameInput, setUserNameInput] = useState("");
  const [ageInput, setAgeInput] = useState("");
  const [error, setError] = useState(undefined);

  const onSubmitHandler = (event) => {
    event.preventDefault();
    if (validateForm(event)) {
      setIsValid(true);
      props.onUserAdded(event);
      setUserNameInput("");
      setAgeInput("");
    } else {
      setIsValid(false);
    }
  };

  const setValue = (event) => {
    const value = event.target.value;
    if (event.target.id === "username") {
      setUserNameInput(value);
    } else if (event.target.id === "age") {
      setAgeInput(value);
    }
  };

  const validateAge = (age) => {
    return +age > 0;
  };

  const validateName = (name) => {
    return name.trim().length > 0;
  };

  const validateForm = (event) => {
    const isValidName = validateName(event.target.username.value);
    const isValidAge = validateAge(event.target.age.value);

    !isValidAge && setFormError("Invalid age", "Age must be greater than 0");
    !isValidName && setFormError("Invalid User name", "Please insert name.");

    return isValidName && isValidAge;
  };

  const errorModalHandler = () => {
    setError(null);
  };

  const setFormError = (title, message) => {
    setError({
      title: title,
      message: message,
    });
  };
  return (
    <div>
      {error && !isValid && (
        <ErrorModal
          title={error.title}
          message={error.message}
          onConfirm={errorModalHandler}
        ></ErrorModal>
      )}
      <form className={styles.form} onSubmit={onSubmitHandler}>
        <label htmlFor="username">Username</label>
        <input
          id="username"
          type="text"
          value={usernameInput}
          onChange={setValue}
        ></input>
        <label htmlFor="age">Age</label>
        <input
          id="age"
          type="number"
          value={ageInput}
          onChange={setValue}
        ></input>
        <Button>Add user</Button>
      </form>
    </div>
  );
};

export default AddUser;
