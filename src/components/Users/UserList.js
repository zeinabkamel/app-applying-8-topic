import React, { useState } from "react";
import Card from "../UI/Card";
import classes from "../Users/UserList.module.css";

const UserList = (props) => {
  console.log(props);
  return (
    <Card className={classes.users}>
      <ul>
        {props.users.map((user) => (
          <li key={user.id}>
            {user.name} ({user.age} years old)
          </li>
        ))}
      </ul>
    </Card>
  );
};
export default UserList;
