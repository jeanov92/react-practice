import React, {useState} from 'react';
import AddUser from './components/Users/AddUser';
import UsersList from './components/Users/UsersList';

function App() {
  const [users, setUsers] = useState([{ name: "Jean", age: 30, id: Math.random() }]);
  
  const addNewUserHandler = (user) => {
    const username = user.name;
    const age = user.age;
    setUsers([...users, {name: username, age: age, id: Math.random()}]);
  };

  return (
    <>
        <AddUser addNewUser={addNewUserHandler}></AddUser>
        <UsersList users={users}></UsersList>
    </>
  );
}

export default App;
