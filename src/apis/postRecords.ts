import { instance } from "./axios";
import { recordsType } from "../interfaces/timetable";

const postRecords = (body: recordsType) => {
  const response = instance.post("/records", body);
  return response;
};

export default postRecords;
