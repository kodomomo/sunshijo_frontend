import { instance } from "./axios";

interface bodyType {
  record_id: string;
  react: boolean;
}

const postRecord = (body: bodyType) => {
  const response = instance.put("/records", body);
  return response;
};

export default postRecord;
