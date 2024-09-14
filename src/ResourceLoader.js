import axios from "axios";
import React, { useEffect, useState } from "react";

export const ResoureLoader = ({ resourceURL, resourceName, children }) => {
  const [state, setState] = useState(null);
  useEffect(() => {
    (async () => {
      const response = await axios.get(resourceURL);
      setState(response.data);
    })();
  }, [resourceURL]);
  return (
    <>
      {React.Children.map(children, (child) => {
        if (React.isValidElement(child)) {
          return React.cloneElement(child, { [resourceName]: state });
        }
        return child;
      })}
    </>
  );
};
