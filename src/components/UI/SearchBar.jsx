import { IoIosSearch } from "react-icons/io";
import "./search-bar.scss";
import Button from "./Button";
import { IoIosArrowDown } from "react-icons/io";
import React, { useState } from "react";
import DropDown from "./DropDown";

const SearchBar = ({ orderBy, onOrderByChange, onChangeUserHandler }) => {
  const [toggleSort, setToggleSort] = useState(false);

  const handleToggleSort = () => {
    setToggleSort(!toggleSort);
  };
  return (
    <>
      <div className="search-bar-wrapper">
        <div className="search-bar-content">
          <input
            onChange={onChangeUserHandler}
            type="text"
            className="search-bar-input"
            placeholder="Search..."
          />

          <IoIosSearch
            color="rgb(118, 21, 160)"
            size="1.3em"
            className="search-icon"
          />
        </div>
        <div className="position-relative">
          <Button className="button" onClick={handleToggleSort}>
            Sort <IoIosArrowDown />
          </Button>
          {toggleSort && (
            <DropDown
              onOrderByChange={onOrderByChange}
              orderBy={orderBy}
              setToggleSort={setToggleSort}
              toggleSort={toggleSort}
            />
          )}
        </div>
      </div>
    </>
  );
};

export default SearchBar;
