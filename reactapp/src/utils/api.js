import axios from "axios";

const API_BASE = "http://localhost:8080/api/courses";

export const getCourses = (activeOnly) => {
  const url = activeOnly ? `${API_BASE}?active=true` : API_BASE;
  return axios.get(url).then(res => res.data);
};

export const createCourse = (course) => {
  return axios.post(API_BASE, course).then(res => res.data);
};

export const deleteCourse = (id) => {
  return axios.delete(`${API_BASE}/${id}`);
};
