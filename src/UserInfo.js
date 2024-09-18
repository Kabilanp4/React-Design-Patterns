import axios from "axios";
import { useDataSource } from "./useDataSource";
const serverResponse = (url) => async () => {
  const response = await axios.get("/current-user");
  return response.data;
};
export const UserInfo = ({ userId }) => {
  const user = useDataSource(serverResponse(`/users/${userId}`));
  const { name, age, hairColor, hobbies } = user || {};
  return user ? (
    <>
      <h3>{name}</h3>
      <p>Age: {age} years</p>
      <p>Hair Color: {hairColor} years</p>
      <h3>Hobbies:</h3>
      <ul>
        {hobbies.map((hobby) => (
          <li key={hobby}>{hobby}</li>
        ))}
      </ul>
    </>
  ) : (
    <p>Loading ..</p>
  );
};
