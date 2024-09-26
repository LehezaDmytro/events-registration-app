import { useParams } from "react-router-dom";
import { useState, useEffect } from "react";
import { RotatingLines } from "react-loader-spinner";
import VisitorsList from "../../components/VisitorsList/VisitorsList";
import { getEventById } from "../../api/events";

const EventParticipants = () => {
  const { eventId } = useParams();
  const [event, setEvent] = useState({});
  const [isLoading, setLoading] = useState(false);

  useEffect(() => {
    const fetchEvent = async () => {
      try {
        setLoading(true);
        const data = await getEventById(eventId);
        setEvent({ ...data });
      } catch (error) {
        console.error("Error fetching event data:", error.name, error.message);
      } finally {
        setLoading(false);
      }
    };
    fetchEvent();
  }, [eventId]);

  return (
    <section>
      <h2>{event.title} participants</h2>
      {isLoading ? <RotatingLines /> : <VisitorsList event={event} />}
    </section>
  );
};

export default EventParticipants;
