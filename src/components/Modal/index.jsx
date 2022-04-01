import axios from "axios";
import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { getUsers } from "../../redux/action/users";
import styles from "./Modal.module.scss";

const Modal = ({ id, setModal, sort, page, setPage }) => {
  const dispatch = useDispatch();
  const users = useSelector((state) => state.users.users);
  async function onDelete(id) {
    await axios.delete(
      `https://6238dcc300ed1dbc5ab835a7.mockapi.io/users/${id}`
    );

    dispatch(
      getUsers(
        `https://6238dcc300ed1dbc5ab835a7.mockapi.io/users?sortBy=${sort}&order=desc&p=${page}&l=7`
      )
    );
    setModal({ isOpen: false, id: null });

    if (users.length <= 1) {
      setPage((prev) => prev - 1);
    }
  }

  return (
    <div className={styles.wrapper}>
      <div className={styles.modal}>
        <p>Вы уверены, что хотите удалить пользoвателя?</p>
        <div className={styles.answer}>
          <button onClick={() => onDelete(id)}>Да</button>
          <button onClick={() => setModal({ isOpen: false, id: null })}>
            Нет
          </button>
        </div>
      </div>
    </div>
  );
};

export default Modal;
