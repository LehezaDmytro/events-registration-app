import { useState } from "react";

import styles from "./Filter.module.scss";

const Filter = ({ handleChangeFilter }) => {
  const [selectedOption, setSelectedOption] = useState("none");

  const handleSelectChange = (e) => {
    setSelectedOption(e.target.value);
    handleChangeFilter(e.target.value);
  };

  return (
    <div className={styles.filter}>
      <p className={styles.filterTitle}>Filter by:</p>
      <select value={selectedOption} onChange={handleSelectChange}>
        <option value="none">None</option>
        <option value="title">Title</option>
        <option value="date">Event date</option>
        <option value="organizer">Organizer</option>
      </select>
    </div>
  );
};

export default Filter;
