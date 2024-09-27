import EventsList from "../../components/EvenstList/EventsList";
import Paginations from "../../components/Pagination/Pagination";
import Filter from "../../components/Filter/Filter";
import { useEffect, useState } from "react";
import { RotatingLines } from "react-loader-spinner";
import { getEvents } from "../../api/events";
import styles from "./EventBoard.module.scss";

const EventBoard = () => {
  const [isLoading, setLoading] = useState(false);
  const [showPagination, setShowPagination] = useState(false);
  const [events, setEvents] = useState([]);
  const [count, setCount] = useState(1);
  const [page, setPage] = useState(1);
  const [filterValue, setFilterValue] = useState("none");

  const handleChangePage = (newPage) => {
    setPage(newPage);
  };

  const handleChangeFilter = (data) => {
    setFilterValue(data);
  };

  useEffect(() => {
    const featchEvents = async () => {
      try {
        setLoading(true);
        setShowPagination(false);

        const { data, total } = await getEvents(page, undefined, filterValue);
        setEvents([...data]);

        const count = Math.ceil(total / 6);
        setCount(count);
        setShowPagination(true);
      } catch (error) {
        console.log(error.name);
        console.log(error.message);
        setShowPagination(false);
      } finally {
        setLoading(false);
      }
    };
    featchEvents();
  }, [page, filterValue]);

  return (
    <section className={styles.eventBoard}>
      <h1>Events</h1>
      <Filter handleChangeFilter={handleChangeFilter} />
      {isLoading ? <RotatingLines /> : <EventsList events={events} />}
      {showPagination ? (
        <Paginations
          className={styles.pagination}
          onChangePage={handleChangePage}
          page={page}
          count={count}
        />
      ) : (
        ""
      )}
    </section>
  );
};

export default EventBoard;
