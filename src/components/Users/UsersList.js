import styles from "./UsersList.module.css";
import { AiOutlineUser } from "react-icons/ai";
import Card from "../UI/Card";

const UsersList = (props) => {
  return (
    <>
      <Card className={styles.users}>
        <ul>
          {props.users.map((user) => {
            return (
              <li key={user.id}>
                <div className="icon">
                  <AiOutlineUser />
                </div>
                <div>
                  <h2>
                    <b>{user.name}</b>
                  </h2>
                  <p>{user.age}</p>
                </div>
              </li>
            );
          })}
        </ul>
      </Card>
    </>
  );
};

export default UsersList;
