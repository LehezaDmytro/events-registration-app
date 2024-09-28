import axios from "axios";

const baseURL = "https://events-registration-app-backend-curu.onrender.com";

const eventsInstance = axios.create({
  baseURL,
});

export const getEvents = async (page = 1, limit = 6, sortBy = "none") => {
  try {
    const { data } = await eventsInstance.get(
      `/events/?page=${page}&limit=${limit}&sortBy=${sortBy}`
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
