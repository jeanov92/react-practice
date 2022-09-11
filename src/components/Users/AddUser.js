import React from "react";
import UserForm from "./UserForm";

const AddUser = (props) => {
  const addUserHandler = (user) => {
    props.addNewUser(user);
  };

  return (
    <>
      <UserForm onUserAdded={addUserHandler}></UserForm>
    </>
  );
};

export default AddUser;
