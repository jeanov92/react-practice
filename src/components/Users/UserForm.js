import React, { useState } from "react";
import Button from "../UI/Button";
import ErrorModal from "../UI/ErrorModal";
import styles from "./UserForm.module.css";

const AddUser = (props) => {
  const [isValid, setIsValid] = useState(true);
  const [isValidForm, setIsValidForm] = useState(true);
  const [isValidUserAge, setIsValidUserAge] = useState(true);
  const [usernameInput, setUserNameInput] = useState('');
  const [ageInput, setAgeInput] = useState(true);
  
  const userHandler = (event) => {
    event.preventDefault();
    if (validateForm(event)) {
      setIsValidForm(true);
      props.onUserAdded(event);
      setUserNameInput('');
      setAgeInput('');
      setIsValid(false);
    } else {
      setIsValidForm(false);
    }
  };

  const validateInput = (event) => {
    const value = event.target.value;
    if (event.target.id === "username" && validateName(value)) {
      setIsValid(true);
      setUserNameInput(value)
    } else if (event.target.id === "age") {
      const isValidAge = validateAge(value);
      setIsValidUserAge(isValidAge);
      setIsValid(isValidAge);
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
    return validateName(event.target.username.value) &&
      validateAge(event.target.age.value);
  };

  return (
    <div>
      {!isValidForm && <ErrorModal title="Invalid form" message="Incomplete data"></ErrorModal>}
    <form className={styles.form} onSubmit={userHandler}>
      <label htmlFor="username">Username</label>
      <input id="username" type="text" value={usernameInput} onChange={validateInput}></input>
      <label htmlFor="age">Age</label>
      {!isValidUserAge && <p>Age must be greater than 0</p>}
      <input id="age" type="number" value={ageInput} onChange={validateInput}></input>
      {!isValidForm && <p>Invalid form</p>}
      <Button>Add user</Button>
    </form>
    </div>
  );
};

export default AddUser;
