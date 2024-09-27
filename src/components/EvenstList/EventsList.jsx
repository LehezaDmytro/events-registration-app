import { Link } from "react-router-dom";
import styles from "./EventsList.module.scss";

const EventsList = ({ events }) => {
  function formatDate(dateString) {
    const date = new Date(dateString);
    const day = String(date.getDate()).padStart(2, "0");
    const month = String(date.getMonth() + 1).padStart(2, "0");
    const year = date.getFullYear();

    return `${day}-${month}-${year}`;
  }

  const eventsMarckup = events.map((event) => {
    const { _id, title, description, date, organizer } = event;
    return (
      <li className={styles.eventItem} key={_id}>
        <div className={styles.textGroup}>
          <h4>{title}</h4>
          <p>{description}</p>
          <p>{formatDate(date)}</p>
          <p>{organizer}</p>
        </div>
        <div className={styles.linkGroup}>
          <Link to={`/register/${_id}`}>Register</Link>
          <Link to={`/participants/${_id}`}>View</Link>
        </div>
      </li>
    );
  });
  return <ul className={styles.eventsList}>{eventsMarckup}</ul>;
};

export default EventsList;
