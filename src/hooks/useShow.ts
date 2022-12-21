import { useState } from "react";

const useShow = (basics: boolean = false) => {
  const [isShow, setIsShow] = useState<boolean>(basics);
  const changeShow = () => {
    setIsShow(!isShow);
  };

  return { isShow, changeShow };
};

export default useShow;
