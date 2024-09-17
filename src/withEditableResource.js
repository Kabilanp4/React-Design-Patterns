import axios from "axios";
import { useEffect, useState } from "react";

const Capitalize = (str) => {
  return str.charAt(0).toUpperCase() + str.slice(1);
};
export const withEditableResource = (Component, resourcePath, resourceName) => {
  return (props) => {
    const [originalData, setoriginalData] = useState(null);
    const [Data, setData] = useState(null);
    useEffect(() => {
      (async () => {
        const response = await axios.get(resourcePath);
        setoriginalData(response.data);
        setData(response.data);
      })();
    }, []);
    const onChange = (changes) => {
      setData({ ...Data, ...changes });
    };
    const onSave = async () => {
      const response = await axios.post(resourcePath, { [resourceName]: Data });
      setoriginalData(response.data);
      setData(response.data);
    };
    const onReset = () => {
      setData(originalData);
    };
    const resourceProps = {
      [resourceName]: Data,
      [`onChange${Capitalize(resourceName)}`]: onChange,
      [`onSave${Capitalize(resourceName)}`]: onSave,
      [`onReset${Capitalize(resourceName)}`]: onReset,
    };
    return <Component {...props} {...resourceProps} />;
  };
};
