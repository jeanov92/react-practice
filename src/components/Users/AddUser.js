import React from "react";
import UserForm from "./UserForm";

const AddUser = (props) => {
  const addUserHandler = (event) => {
    props.addNewUser(event);
  };

  return (
    <>
      <UserForm onUserAdded={addUserHandler}></UserForm>
    </>
  );
};

export default AddUser;
