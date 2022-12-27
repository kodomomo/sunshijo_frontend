import { instance } from "./axios";

interface queryString {
  grade: string;
  classNum: string;
  startAt: string;
  endAt: string;
}

const getTimetable = (params: queryString) => {
  const response = instance.get("/schedules/web", { params: params });
  return response;
};

export default getTimetable;
