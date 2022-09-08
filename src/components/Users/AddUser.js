import React from "react";
import UserForm from "./UserForm";

const AddUser = (props) => {
  const addUserHandler = (event) => {
    props.addNewUser(event);
  };

  return (
    <div>
      <UserForm onUserAdded={addUserHandler}></UserForm>
    </div>
  );
};

export default AddUser;
