import { useEffect, useRef, useState } from "react";
import EventsList from "../../components/EvenstList/EventsList";
import Filter from "../../components/Filter/Filter";
import { RotatingLines } from "react-loader-spinner";
import { getEvents } from "../../api/events";
import styles from "./EventBoard.module.scss";

const EventBoard = () => {
  const [isLoading, setLoading] = useState(false);
  const [hasMore, setHasMore] = useState(true);
  const [events, setEvents] = useState([]);
  const [page, setPage] = useState(1);
  const [filterValue, setFilterValue] = useState("none");

  const eventBoardRef = useRef(null);

  const handleChangeFilter = (data) => {
    setFilterValue(data);
    setPage(1);
    setEvents([]);
    setHasMore(true);
  };

  const loadMoreEvents = async () => {
    if (isLoading || !hasMore) return;

    try {
      setLoading(true);
      const { data, total } = await getEvents(page, undefined, filterValue);
      if (data.length === 0 || events.length + data.length >= total) {
        setHasMore(false);
      } else {
        setEvents((prevEvents) => {
          const dublicate = prevEvents.find((e) => e._id === data[0]._id);
          if (dublicate) {
            return prevEvents;
          } else {
            const nextPage = page + 1;
            setPage(nextPage);
            return [...prevEvents, ...data];
          }
        });
      }
    } catch (error) {
      console.error(error.name, error.message);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    const handleScroll = () => {
      const element = eventBoardRef.current;

      if (
        element.scrollHeight - element.scrollTop <=
          element.clientHeight + 100 &&
        hasMore &&
        !isLoading
      ) {
        loadMoreEvents();
      }
    };

    const element = eventBoardRef.current;
    if (element) {
      element.addEventListener("scroll", handleScroll);
    }

    return () => {
      if (element) {
        element.removeEventListener("scroll", handleScroll);
      }
    };
  }, [hasMore, isLoading]);

  useEffect(() => {
    const fetchInitialEvents = async () => {
      setPage(1);
      setHasMore(true);
      setEvents([]);
      await loadMoreEvents();
    };

    fetchInitialEvents();
  }, [filterValue]);

  return (
    <section ref={eventBoardRef} className={styles.eventBoard}>
      <h1>Events</h1>
      <Filter handleChangeFilter={handleChangeFilter} />
      <EventsList events={events} />
      {isLoading && <RotatingLines />}
    </section>
  );
};

export default EventBoard;
