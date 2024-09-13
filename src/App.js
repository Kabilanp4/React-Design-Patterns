import { SplitScreen } from "./SplitScreen";

const LeftHandComponent = ({ name }) => {
  return <h1 style={{ backgroundColor: "green" }}>{name}</h1>;
};
const RightHandComponent = ({ name }) => {
  return <h1 style={{ backgroundColor: "yellow" }}>{name}</h1>;
};
function App() {
  return (
    <SplitScreen leftWeight={1} rightWeight={1}>
      <LeftHandComponent name="React" />
      <RightHandComponent name="Angular" />
    </SplitScreen>
  );
}

export default App;
