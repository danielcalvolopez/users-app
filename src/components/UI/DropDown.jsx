import "./dropdown.scss";
import { IoIosCheckmark } from "react-icons/io";

const DropDown = ({ onOrderByChange, setToggleSort, toggleSort, orderBy }) => {
  return (
    <div className="dropmenu-wrapper">
      <div className="dropmenu">
        <div
          className="drop-asc"
          onClick={() => {
            onOrderByChange("asc");
            setToggleSort(!toggleSort);
          }}
        >
          Asc {orderBy === "asc" && <IoIosCheckmark size="1.2em" />}
        </div>
        <div className="dropmenu-divider"></div>
        <div
          className="drop-desc"
          onClick={() => {
            onOrderByChange("desc");
            setToggleSort(!toggleSort);
          }}
        >
          Desc {orderBy === "desc" && <IoIosCheckmark size="1.2em" />}
        </div>
      </div>
    </div>
  );
};

export default DropDown;
