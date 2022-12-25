import { instance } from "./axios";

const getTeacherList = () => {
  const response = instance.get("/teachers/list");
  return response;
};

export default getTeacherList;
