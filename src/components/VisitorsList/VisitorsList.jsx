import styles from "./VisitorsList.module.scss";

const VisitorsList = ({ event }) => {
  const { visitors } = event;
  const visitorsMsrckup = visitors?.map((visitor) => {
    return (
      <li className={styles.visitorItem} key={visitor._id}>
        <h4>{visitor.fullName}</h4>
        <p>{visitor.email}</p>
      </li>
    );
  });
  return <ul className={styles.visitorsList}>{visitorsMsrckup}</ul>;
};

export default VisitorsList;
