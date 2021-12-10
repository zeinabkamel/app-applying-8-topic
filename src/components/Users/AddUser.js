import React, { useState } from "react";
import Button from "../UI/Button";
import Card from "../UI/Card";
import classes from "../Users/AddUser.module.css";
import ErrorModal from "../UI/ErrorModal";
const AddUser = (props) => {
  const [inputText, setInputText] = useState("");
  const [inputAge, setInputAge] = useState("");
  const [error, setError] = useState();

  const addUserHandler = (event) => {
    event.preventDefault();
    if (inputText.trim().length == 0 || inputAge.trim().length == 0) {
      setInputText("");
      setInputAge("");
      setError({
        title: "Invalid input",
        message: "Please enter a valid name and age (non-empty values).",
      });
      return;
    }
    if (inputAge < 1) {
      setInputText("");
      setInputAge("");
      setError({
        title: "Invalid age",
        message: "Please enter a valid age (> 0).",
      });
      return;
    }

    props.applyOnAdd(inputText, inputAge);
    console.log("inputText", inputText);
    console.log("inputAge", inputAge);
    setInputText("");
    setInputAge("");
  };

  const HandlerInputText = (event) => {
    setInputText(event.target.value);
  };
  const HandlerInputAge = (event) => {
    setInputAge(event.target.value);
  };
  const errorHandler = () => {
    setError(null);
  };
  return (
    <div>
      {error && (
        <ErrorModal
          title={error.title}
          message={error.message}
          onConfirm={errorHandler}
        />
      )}
      <Card className={classes.input}>
        <form onSubmit={addUserHandler}>
          <label htmlFor="username">Username</label>
          <input
            id="username"
            type="text"
            value={inputText}
            onChange={HandlerInputText}
          />
          <label htmlFor="age">age(years)</label>
          <input
            id="age"
            type="number"
            value={inputAge}
            onChange={HandlerInputAge}
          />
          <Button type="submit" text="Add user" />
        </form>
      </Card>
    </div>
  );
};
export default AddUser;
