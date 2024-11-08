import css from "./SearchBox.module.css";

import { useDispatch, useSelector } from "react-redux";
import { changeFilter } from "../../redux/filtersSlice";

const SearchBox = () => {
  const filterValue = useSelector((state) => state.filters.filter);
  const dispatch = useDispatch();

  const selectNameFilter = (event) => {
    const value = event.target.value.trim();
    dispatch(changeFilter(value));
  };

  return (
    <div className={css.box}>
      <p className={css.label}>Find contacts by name</p>
      <input
        className={css.input}
        type="text"
        value={filterValue}
        onChange={selectNameFilter}
        placeholder="Enter a name"
      />
    </div>
  );
};

export default SearchBox;
