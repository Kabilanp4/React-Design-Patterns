import axios from "axios";
import { useEffect, useState } from "react";

export const useUser = ({ userId }) => {
  const [user, setuser] = useState(null);
  useEffect(() => {
    (async () => {
      const response = await axios.get(`/users/${userId}`);
      setuser(response.data);
    })();
  }, [userId]);
  return user;
};
