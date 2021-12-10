import { useState } from "react";
import AddUser from "./components/Users/AddUser";
import UserList from "./components/Users/UserList";

function App() {
  let [usersList, SetUsersList] = useState([]);
  const applyOnAdd = (uName, uAge) => {
    SetUsersList((prevUsersList) => {
      return [
        ...prevUsersList,
        { name: uName, age: uAge, id: Math.random().toString() },
      ];
    });
  };

  return (
    <div className="App">
      <AddUser applyOnAdd={applyOnAdd}></AddUser>
      <UserList users={usersList} />
    </div>
  );
}

export default App;
