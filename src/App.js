import { UserInfo } from "./UserInfo";
import { UserInfoForm } from "./UserInfoForm";
import { withUser } from "./WithUser";
const UserInfoWrapped = withUser(UserInfo, "123");
function App() {
  return <UserInfoForm />;
}

export default App;
