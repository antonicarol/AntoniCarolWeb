import React, { useEffect, useState } from "react";

const useLocationCustom = (path) => {
  const [data, setData] = useState();

  useEffect(() => {
    setData(path);
  }, [path]);

  return { data };
};

export default useLocationCustom;
