import axios from "axios";
import { useEffect, useState } from "react";

export const useResource = (resourceURL) => {
  const [user, setuser] = useState(null);
  useEffect(() => {
    (async () => {
      const response = await axios.get(resourceURL);
      setuser(response.data);
    })();
  }, [resourceURL]);
  return user;
};
