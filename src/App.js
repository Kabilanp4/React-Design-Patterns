import { useState } from "react";
import { ControlledOnboardingFlow } from "./ControlledOnboardingFlow";
function App() {
  const [onboardingData, setOnboardingData] = useState({});
  const [currentIndex, setCurrentIndex] = useState(0);
  const onNext = (stepData) => {
    setOnboardingData({ ...onboardingData, ...stepData });
    console.log({ ...onboardingData, ...stepData });
    setCurrentIndex(currentIndex + 1);
  };
  const StepOne = ({ goToNext }) => {
    return (
      <>
        <h1>step 1</h1>
        <button onClick={() => onNext({ name: "kabilan" })}>Next</button>
      </>
    );
  };
  const StepTwo = ({ goToNext }) => {
    return (
      <>
        <h1>step 2</h1>
        <button onClick={() => onNext({ Age: 100 })}>Next</button>
      </>
    );
  };
  const StepThree = ({ goToNext }) => {
    return (
      <>
        <p>Congratulations! you have learned Controlled Components!</p>
        <h1>step 3</h1>
        <button onClick={() => onNext({ hairColor: "brown" })}>Next</button>
      </>
    );
  };
  const StepFour = ({ goToNext }) => {
    return (
      <>
        <h1>step 4</h1>
        <button onClick={() => onNext({})}>Next</button>
      </>
    );
  };
  return (
    <>
      <ControlledOnboardingFlow currentIndex={currentIndex} onNext={onNext}>
        <StepOne />
        <StepTwo />
        {onboardingData.Age >= 50 && <StepThree />}
        <StepFour />
      </ControlledOnboardingFlow>
    </>
  );
}

export default App;
