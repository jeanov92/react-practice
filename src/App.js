import React, {useState} from 'react';
import AddUser from './components/Users/AddUser';
import UsersList from './components/Users/UsersList';

function App() {
  const [users, setUsers] = useState([{ name: "Jean", age: 30, id: Math.random() }]);
  
  const addNewUserHandler = (event) => {
    const username = event.target.username.value;
    const age = event.target.age.value;
    setUsers([...users, {name: username, age: age, id: Math.random()}]);
  };

  return (
    <div>
        <AddUser addNewUser={addNewUserHandler}></AddUser>
        <UsersList users={users}></UsersList>
    </div>
  );
}

export default App;
