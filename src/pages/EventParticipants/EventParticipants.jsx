import { useParams } from "react-router-dom";
import { useState, useEffect } from "react";
import { RotatingLines } from "react-loader-spinner";
import VisitorsList from "../../components/VisitorsList/VisitorsList";
import VisitorsSearch from "../../components/VisitorsSearch/VisitorsSearch";
import { getEventById } from "../../api/events";

const EventParticipants = () => {
  const { eventId } = useParams();
  const [event, setEvent] = useState({});
  const [isLoading, setLoading] = useState(false);
  const [searchVisitorQuery, setSearchVisitorQuery] = useState("");

  const hendleChangeSearch = (query) => {
    setSearchVisitorQuery(query);
  };

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
      <VisitorsSearch hendleChangeSearch={hendleChangeSearch} />
      {isLoading ? (
        <RotatingLines />
      ) : (
        <VisitorsList event={event} searchQuery={searchVisitorQuery} />
      )}
    </section>
  );
};

export default EventParticipants;
