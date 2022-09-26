import Card from "./UI/Card";
import "./users-list.scss";
import { IoMdClose } from "react-icons/io";

const UsersList = ({ onDeleteItem, filteredUsersList }) => {
  return (
    <ul>
      {filteredUsersList.map((user) => (
        <Card className="item-card" key={user.id}>
          <div className="item-wrapper">
            <li className="item">
              {user.name} ({user.age} years old), {user.country.toUpperCase()}
              <IoMdClose
                cursor="pointer"
                color="rgb(118, 21, 160)"
                size="1.5em"
                onClick={() => onDeleteItem(user.id)}
              />
            </li>
          </div>
        </Card>
      ))}
    </ul>
  );
};

export default UsersList;
