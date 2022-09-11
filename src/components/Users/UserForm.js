import React, { useState, useRef } from "react";
import Button from "../UI/Button";
import ErrorModal from "../UI/ErrorModal";
import styles from "./UserForm.module.css";

const AddUser = (props) => {
  const [isValid, setIsValid] = useState(true);
  const [error, setError] = useState(undefined);
  const userNameInputRef = useRef();
  const userAgeInputRef = useRef();

  const onSubmitHandler = (event) => {
    event.preventDefault();
    if (validateForm()) {
      setIsValid(true);
      props.onUserAdded({
        name: userNameInputRef.current.value,
        age: userAgeInputRef.current.value,
      });
      userNameInputRef.current.value = "";
      userAgeInputRef.current.value = "";
    } else {
      setIsValid(false);
    }
  };

  const validateAge = (age) => {
    return +age > 0;
  };

  const validateName = (name) => {
    return name.trim().length > 0;
  };

  const validateForm = () => {
    const isValidName = validateName(userNameInputRef.current.value);
    const isValidAge = validateAge(userAgeInputRef.current.value);

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
    <>
      {error && !isValid && (
        <ErrorModal
          title={error.title}
          message={error.message}
          onConfirm={errorModalHandler}
        ></ErrorModal>
      )}
      <form className={styles.form} onSubmit={onSubmitHandler}>
        <label htmlFor="username">Username</label>
        <input id="username" type="text" ref={userNameInputRef}></input>
        <label htmlFor="age">Age</label>
        <input id="age" type="number" ref={userAgeInputRef}></input>
        <Button>Add user</Button>
      </form>
    </>
  );
};

export default AddUser;
