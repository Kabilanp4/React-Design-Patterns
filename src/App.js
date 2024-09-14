import axios from "axios";
import { DataSource } from "./DataSource";
const getDataFunc = (url) => async () => {
  const response = await axios.get(url);
  return response.data;
};
const getLocalStorageItem = (key) => () => {
  return localStorage.getItem(key);
};
const Text = ({ message }) => {
  return <h1>{message}</h1>;
};
function App() {
  return (
    <>
      {/* <DataSource getDataFunc={getDataFunc("/users/123")} resourceName="user">
        <UserInfo />
      </DataSource> */}
      <DataSource
        getDataFunc={getLocalStorageItem("name")}
        resourceName="message"
      >
        <Text />
      </DataSource>
    </>
  );
}

export default App;
