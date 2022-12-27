import { instance } from "./axios";
import { paramsType } from "../interfaces/records";

const getChangeRecords = (params: paramsType) => {
  const response = instance.get("/docs/template", { params: params });
  return response;
};

export default getChangeRecords;
