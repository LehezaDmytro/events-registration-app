import { useParams } from "react-router-dom";
import { addNewVisitor } from "../../api/events";
import RegistrationForm from "../../components/RegistrationForm/RegistrationForm";

const EventRegistration = () => {
  const { eventId } = useParams();
  const onHandleSubmit = (newVisitorData) => {
    addNewVisitor(eventId, newVisitorData);
  };

  return (
    <section>
      <h2>Event Registration</h2>
      <RegistrationForm onHandleSubmit={onHandleSubmit} />
    </section>
  );
};

export default EventRegistration;
