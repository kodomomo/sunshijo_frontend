import { useState } from "react";

const useDropdown = (menu: string[]) => {
  const [select, setSelect] = useState<string>(menu[0]);
  const [isShow, setIsShow] = useState<boolean>(false);

  const menuMap = menu.map((item: string, index: number) => {
    return (
      <div key={index} onClick={() => setSelect(item)}>
        {item}
      </div>
    );
  });

  return { select, menuMap, isShow, setIsShow };
};

export default useDropdown;
