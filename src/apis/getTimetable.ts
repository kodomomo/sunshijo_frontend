import { instance } from "./axios";

interface queryString {
  grade: string;
  class_num: string;
  startAt: string;
  endAt: string;
}

const getTimetable = (params: queryString) => {
  const response = instance.get("/schedules", { params: params });
  return response;
};

export default getTimetable;
