import styles from "./VisitorsSearch.module.scss";

const VisitorsSearch = ({ hendleChangeSearch }) => {
  const handleChange = (e) => {
    hendleChangeSearch(e.target.value);
  };

  return (
    <div className={styles.search}>
      <p>Search:</p>
      <input
        type="text"
        placeholder="Enter name or email"
        onChange={handleChange}
      />
    </div>
  );
};

export default VisitorsSearch;
