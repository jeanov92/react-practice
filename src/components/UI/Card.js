import { AiOutlineUser } from "react-icons/ai";

import styles from "./Card.module.css";

const Card = (props) => {
  return (
    <div>
      <div className={styles.card}>
        <div className="icon">
          <AiOutlineUser />
        </div>
        <div className={styles.container}>
          <h4>
            <b>{props.user.name}</b>
          </h4>
          <p>{props.user.age}</p>
        </div>
      </div>
    </div>
  );
};

export default Card;
