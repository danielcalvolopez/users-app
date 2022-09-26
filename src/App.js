import { useState } from "react";
import AddUser from "./components/AddUser";
import UsersList from "./components/UsersList";
import "./app.scss";
import { IoIosAddCircleOutline } from "react-icons/io";
import SearchBar from "./components/UI/SearchBar";

const App = () => {
  const [usersList, setUsersList] = useState([]);
  const [toggle, setToggle] = useState(false);
  const [searchUser, setSearchUser] = useState("");
  const [orderBy, setOrderBy] = useState("asc");
  const [sortBy, setSortBy] = useState("name");

  const filteredUsersList = usersList
    .filter((user) =>
      user.name.toLowerCase().includes(searchUser.toLowerCase())
    )
    .sort((a, b) => {
      let order = orderBy === "asc" ? 1 : -1;
      return a[sortBy].toLowerCase() < b[sortBy].toLowerCase()
        ? -1 * order
        : 1 * order;
    });

  const onChangeUserHandler = (event) => {
    setSearchUser(event.target.value);
  };

  const addUserHandler = (newUserData) => {
    setUsersList((prevUsersList) => [
      ...prevUsersList,
      {
        ...newUserData,
      },
    ]);
  };

  const deleteUserHandler = (userId) => {
    const updatedList = [...usersList].filter((user) => user.id !== userId);
    setUsersList(updatedList);
  };

  const onHandleToggle = () => {
    setToggle(!toggle);
  };
  return (
    <div className="content-wrapper">
      <div
        onClick={onHandleToggle}
        className={`${toggle ? "title-toggle" : "title-toggle-off"}`}
      >
        <IoIosAddCircleOutline size="1.5em" />
        <span />
        <h3>Add New User</h3>
      </div>

      {toggle && (
        <AddUser
          setToggle={setToggle}
          onToggle={toggle}
          onAddUser={addUserHandler}
        />
      )}
      <SearchBar
        orderBy={orderBy}
        onOrderByChange={(myOrder) => setOrderBy(myOrder)}
        sortBy={sortBy}
        onSortByChange={(mySort) => setSortBy(mySort)}
        onChangeUserHandler={onChangeUserHandler}
      />

      <UsersList
        onDeleteItem={deleteUserHandler}
        filteredUsersList={filteredUsersList}
      />
    </div>
  );
};

export default App;
