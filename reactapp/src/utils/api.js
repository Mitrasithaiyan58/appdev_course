import axios from "axios";
import { BASE_URL } from "./constants";

export const addCourse = (courseData) => {
  return axios.post(`${BASE_URL}/api/courses`, courseData);
};

export const getAllCourses = () => {
  return axios.get(`${BASE_URL}/api/courses`);
};