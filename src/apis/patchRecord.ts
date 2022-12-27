import { instance } from "./axios";

interface bodyType {
  record_id: string;
  react: boolean;
}

const patchRecord = (body: bodyType) => {
  const response = instance.patch("/records", body);
  return response;
};

export default patchRecord;
