import styles from "./VisitorsList.module.scss";

const VisitorsList = ({ event, searchQuery }) => {
  const { visitors } = event;

  const filteredVisitors = (query) => {
    return visitors?.filter(
      (visitor) =>
        visitor.fullName.toLowerCase().includes(query.toLowerCase()) ||
        visitor.email.toLowerCase().includes(query.toLowerCase())
    );
  };

  const visitorsMarckup = filteredVisitors(searchQuery)?.map((visitor) => {
    return (
      <li className={styles.visitorItem} key={visitor._id}>
        <h4>{visitor.fullName}</h4>
        <p>{visitor.email}</p>
      </li>
    );
  });
  return <ul className={styles.visitorsList}>{visitorsMarckup}</ul>;
};

export default VisitorsList;
