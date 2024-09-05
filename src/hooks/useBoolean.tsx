import { useState } from "react";

const useBoolean = () => {
  const [boolean, setBoolean] = useState<boolean>(false);

  const toggleHandler = () => {
    setBoolean((prev) => !prev);
  };

  return { boolean, toggleHandler, setBoolean };
};

export default useBoolean;
