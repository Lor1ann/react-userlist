import React from "react";
import styles from "./User.module.scss";
import del from "./svg/delete.svg";
import axios from "axios";
import { useDispatch } from "react-redux";
import { getUsers } from "../../redux/action/users";

const User = ({ username, email, date, rating, id, page, sort }) => {
  const dispatch = useDispatch();

  async function onDelete(id) {
    await axios.delete(
      `https://6238dcc300ed1dbc5ab835a7.mockapi.io/users/${id}`
    );

    dispatch(
      getUsers(
        `https://6238dcc300ed1dbc5ab835a7.mockapi.io/users?sortBy=${sort}&order=desc&p=${page}&l=7`
      )
    );
  }

  return (
    <div className={styles.user}>
      <div className={styles.username}>{username}</div>
      <div className={styles.email}>{email}</div>
      <div className={styles.date}>{date}</div>
      <div className={styles.rating}>{rating}</div>
      <div className={styles.delete}>
        <img src={del} alt="delete" onClick={() => onDelete(id)} />
      </div>
    </div>
  );
};

export default User;
