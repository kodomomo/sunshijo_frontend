import { instance } from "./axios";

const getTeacherList = () => {
  const response = instance.get("/teacher/list");
  return response;
};

export default getTeacherList;
