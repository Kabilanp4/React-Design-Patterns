import axios from "axios";
import React, { useEffect, useState } from "react";

export const UserLoader = ({ userId, children }) => {
  const [user, setuser] = useState(null);
  useEffect(() => {
    (async () => {
      const response = await axios.get(`/users/${userId}`);
      setuser(response.data);
    })();
  }, [userId]);
  return (
    <>
      {React.Children.map(children, (child) => {
        if (React.isValidElement(child)) {
          return React.cloneElement(child, { user });
        }
        return child;
      })}
    </>
  );
};
