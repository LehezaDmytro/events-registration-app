import axios from "axios";

const baseURL = "http://localhost:3001/";

const eventsInstance = axios.create({
  baseURL,
});

export const getEvents = async (page = 1, limit = 6) => {
  try {
    const { data } = await eventsInstance.get(
      `/events/?page=${page}&limit=${limit}`
    );
    return data;
  } catch (error) {
    throw error;
  }
};

export const getEventById = async (id) => {
  try {
    const { data } = await eventsInstance.get(`/events/${id}`);
    return data;
  } catch (error) {
    throw error;
  }
};

export const addNewVisitor = async (iventId, newVisitorData) => {
  try {
    const { data } = await eventsInstance.patch(
      `/events/${iventId}`,
      newVisitorData
    );
    return data;
  } catch (error) {
    throw error;
  }
};
