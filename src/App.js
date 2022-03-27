import styles from "./App.module.scss";
import Header from "./components/Header";
import User from "./components/User";
import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { getUsers } from "./redux/action/users";
import axios from "axios";

function App() {
  const users = useSelector((state) => state.users.users);
  const dispatch = useDispatch();
  const searchVal = useSelector((state) => state.search.searchValue);
  const [sort, setSort] = React.useState("date");
  const [page, setPage] = React.useState(1);
  const [totalPages, setTotalPages] = React.useState(null);

  console.log(totalPages);

  React.useEffect(() => {
    axios
      .get(`https://6238dcc300ed1dbc5ab835a7.mockapi.io/users`)
      .then((res) => {
        setTotalPages(Math.ceil(res.data.length / 7));
      });

    dispatch(
      getUsers(
        `https://6238dcc300ed1dbc5ab835a7.mockapi.io/users?sortBy=${sort}&order=desc&p=${page}&l=7`
      )
    );
  }, [dispatch, sort, page]);

  return (
    <div className={styles.app}>
      <div className={styles.container}>
        <div className={styles.listTitle}>
          <h1>Список пользователей</h1>
        </div>
        <Header />
        <div className={styles.sort}>
          <p>
            Cортировка:{" "}
            <span
              onClick={() => {
                setSort("date");
              }}
              className={styles.sortDate}
              style={sort === "date" ? { color: "#333333" } : null}
            >
              Дата регистрации
            </span>
            <span
              className={styles.sortRating}
              onClick={() => {
                setSort("rating");
              }}
              style={sort === "rating" ? { color: "#333333" } : null}
            >
              Рейтинг
            </span>
          </p>
        </div>
        <div className={styles.list}>
          <div className={styles.listTableTitle}>
            <div>Имя пользователя</div>
            <div>E-mail</div>
            <div>Дата регестрации</div>
            <div>Рейтинг</div>
          </div>
          {users.length ? (
            users
              .filter(
                (obj) =>
                  obj.username
                    .toLowerCase()
                    .includes(searchVal.toLowerCase()) ||
                  obj.email.toLowerCase().includes(searchVal.toLowerCase())
              )
              .map((obj) => {
                return (
                  <User
                    page={page}
                    sort={sort}
                    id={obj.id}
                    key={obj.id}
                    username={obj.username}
                    date={new Date(obj.date).toLocaleDateString()}
                    rating={obj.rating}
                    email={obj.email}
                  />
                );
              })
          ) : (
            <div>Здесь пусто</div>
          )}
        </div>
        <div className={styles.pagination}>
          <button
            disabled={!(page > 1)}
            className={styles.backpage}
            onClick={() => {
              setPage((prev) => prev - 1);
            }}
          >
            Назад
          </button>
          <button
            disabled={page >= totalPages}
            className={styles.nextpage}
            onClick={() => {
              setPage((prev) => prev + 1);
            }}
          >
            Далее
          </button>
        </div>
      </div>
    </div>
  );
}

export default App;
