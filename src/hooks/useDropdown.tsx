import { useState } from "react";
import useShow from "./useShow";

const useDropdown = (menu: string[]) => {
  const [select, setSelect] = useState<string>(menu[0]);
  const { isShow, changeShow } = useShow();

  const menuMap = menu.map((item: string, index: number) => {
    return (
      <div key={index} onClick={() => setSelect(item)}>
        {item}
      </div>
    );
  });

  return { select, menuMap, isShow, changeShow };
};

export default useDropdown;
