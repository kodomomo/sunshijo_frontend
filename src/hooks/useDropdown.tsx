import { useState } from "react";
import { constantType } from "../interfaces/timetable";
import useShow from "./useShow";

const useDropdown = (menu: constantType[]) => {
  const [select, setSelect] = useState<string>(menu[0].number);
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
