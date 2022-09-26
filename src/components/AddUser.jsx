import { useState, useRef } from "react";
import Button from "./UI/Button";
import Card from "./UI/Card";
import "./add-user.scss";
import ErrorModal from "./UI/ErrorModal";
import Countries from "../countries.json";

const AddUser = ({ onAddUser, setToggle }) => {
  const [error, setError] = useState(undefined);

  const nameInputRef = useRef();
  const ageInputRef = useRef();
  const countryInputRef = useRef();

  const addUserHandler = (event) => {
    event.preventDefault();
    const enteredName = nameInputRef.current.value;
    const enteredAge = ageInputRef.current.value;
    const enteredUserCountry = countryInputRef.current.value;
    if (enteredName.trim().length === 0 || enteredAge.trim().length === 0) {
      setError({
        title: "Invalid input",
        message: "Please enter a valid name and age (non-empty values).",
      });
      return;
    }
    if (+enteredAge < 1) {
      setError({
        title: "Invalid age",
        message: "Please enter a valid age (>).",
      });
      return;
    }
    if (typeof enteredUserCountry !== "string") {
      setError({
        title: "Invalid country",
        message: "Please enter a valid country",
      });

      return;
    }

    const newUserData = {
      id: Math.random().toString(),
      name: enteredName,
      age: enteredAge,
      country: enteredUserCountry,
    };
    onAddUser(newUserData);
    nameInputRef.current.value = "";
    ageInputRef.current.value = "";
    countryInputRef.current.value = undefined;

    setToggle(false);
  };

  const errorHandler = () => {
    setError(undefined);
  };

  return (
    <>
      {error && (
        <ErrorModal
          onConfirm={errorHandler}
          title={error.title}
          message={error.message}
        />
      )}
      <Card className="card-content">
        <form onSubmit={addUserHandler}>
          <div className="username">
            <label htmlFor="username">Username</label>
            <input id="username" type="text" ref={nameInputRef} />
          </div>
          <div className="userage">
            <label htmlFor="age">Age (Years)</label>
            <input id="age" type="number" ref={ageInputRef} />
          </div>
          <div className="usercountry">
            <label htmlFor="country">Country</label>
            <select id="country" type="select" ref={countryInputRef}>
              <option value={undefined}>- select a country -</option>
              {Countries.map((country) => {
                return <option key={country.code}>{country.name}</option>;
              })}
            </select>
          </div>
          <Button className="add-user-button">Add User</Button>
        </form>
      </Card>
    </>
  );
};

export default AddUser;
