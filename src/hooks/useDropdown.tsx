import { useState } from "react";
import { constantType } from "../interfaces/timetable";
import useShow from "./useShow";

const useDropdown = (menu: constantType[], now: string) => {
  const [select, setSelect] = useState<string>(now);
  const { isShow, changeShow } = useShow();

  const menuMap = menu.map((item: constantType, index: number) => {
    return (
      <div key={index} onClick={() => setSelect(item.number)}>
        {item.text}
      </div>
    );
  });

  return { select, menuMap, isShow, changeShow };
};

export default useDropdown;
