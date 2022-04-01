import React from "react";
import styles from "./User.module.scss";
import del from "./svg/delete.svg";

const User = ({ username, email, date, rating, id, setModalDate }) => {
  return (
    <div className={styles.user}>
      <div className={styles.username}>{username}</div>
      <div className={styles.email}>{email}</div>
      <div className={styles.date}>{date}</div>
      <div className={styles.rating}>{rating}</div>
      <div className={styles.delete}>
        <img
          src={del}
          alt="delete"
          onClick={() => setModalDate({ isOpen: true, id })}
        />
      </div>
    </div>
  );
};

export default User;
