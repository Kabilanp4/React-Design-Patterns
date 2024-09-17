import axios from "axios";
import { useEffect, useState } from "react";

export const withEditableUser = (Component, userId) => {
  return (props) => {
    const [originalUser, setoriginalUser] = useState(null);
    const [user, setUser] = useState(null);
    useEffect(() => {
      (async () => {
        const response = await axios.get(`/users/${userId}`);
        setoriginalUser(response.data);
        setUser(response.data);
      })();
    }, []);
    const onChangeUser = (changes) => {
      setUser({ ...user, ...changes });
    };
    const onSaveUser = async () => {
      const response = await axios.post(`/users/${userId}`, { user });
      setoriginalUser(response.data);
      setUser(response.data);
    };
    const onReset = () => {
      setUser(originalUser);
    };
    return (
      <Component
        {...props}
        user={user}
        onChangeUser={onChangeUser}
        onSaveUser={onSaveUser}
        onReset={onReset}
      />
    );
  };
};
