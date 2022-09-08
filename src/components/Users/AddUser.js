import React, {useState} from "react";
import UserForm from "./UserForm";
import Card from "../UI/Card";


const AddUser = () => {
  const [users, setUsers] = useState([{ name: "Jean", age: 30 }]);
  
  const addUserHandler = (event) => {
    const username = event.target.username.value;
    const age = event.target.age.value;
    setUsers([...users, {name: username, age: age}]);
  };

  return (
    <div>
      <UserForm onUserAdded={addUserHandler}></UserForm>
      {users.map((user) => {
        return <Card key={Math.random()} user={user}></Card>
      })}
    </div>
  );
};

export default AddUser;
