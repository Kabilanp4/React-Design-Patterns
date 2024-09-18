import axios from "axios";
import { useEffect, useState } from "react";

export const useCurrentUser = () => {
  const [user, setuser] = useState(null);
  useEffect(() => {
    (async () => {
      const response = await axios.get("/current-user");
      setuser(response.data);
    })();
  }, []);
  return user;
};
