import React from "react";
import styles from "./Header.module.scss";
import clear from "./img/clearFilters.svg";
import { useDispatch, useSelector } from "react-redux";
import { setSearchInfo } from "../../redux/action/search";

const Header = () => {
  const [searchValue, setSearchValue] = React.useState("");
  const dispatch = useDispatch();
  const searchVal = useSelector((state) => state.search.searchValue);

  React.useEffect(() => {
    dispatch(setSearchInfo(searchValue));
  }, [dispatch, searchValue]);

  return (
    <div className={styles.header}>
      <div className={styles.headerInput}>
        <input
          type="search"
          placeholder="Поиск по имени или email"
          value={searchValue}
          onChange={(e) => setSearchValue(e.target.value)}
        />
      </div>
      {searchValue.length > 1 && (
        <div
          className={styles.headerClearInput}
          onClick={() => setSearchValue("")}
        >
          <img src={clear} alt="Очистить фильтр" />
          <p>Очистить фильтр</p>
        </div>
      )}
    </div>
  );
};

export default Header;
