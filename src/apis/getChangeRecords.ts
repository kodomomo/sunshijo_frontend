import { instance } from "./axios";
import { paramsType } from "../interfaces/records";

const getChangeRecords = (params: paramsType) => {
  const response = instance.get("/records/list", { params: params });
  return response;
};

export default getChangeRecords;
