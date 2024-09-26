import { Link } from "react-router-dom";
import styles from "./EventsList.module.scss";

const EventsList = ({ events }) => {
  const eventsMarckup = events.map((event) => {
    const { _id, title, description, date, organizer } = event;
    return (
      <li className={styles.eventItem} key={_id}>
        <div className={styles.textGroup}>
          <h4>{title}</h4>
          <p>{description}</p>
          <p>{date}</p>
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
