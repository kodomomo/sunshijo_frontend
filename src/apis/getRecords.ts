import { instance } from "./axios";

const getRecords = () => {
  const response = instance.get("/records");
  return response;
};

export default getRecords;
