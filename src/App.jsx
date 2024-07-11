import logo from "./assets/investment-calculator-logo.png";
import UserInput from "./UserInput";
import { useState } from "react";
import Results from "./Results.jsx";


function App() {
  const [userInput, setUserInput] = useState({
    initialInvestment: 10000,
    annualInvestment: 1200,
    expectedReturn: 6,
    duration: 10,
  });

  const inputIsValid = userInput.duration >= 1;

  function handleChange(inputIdentifier, newValue) {
    return setUserInput((prevUserInput) => {
      return {
        ...prevUserInput,
        [inputIdentifier]: newValue,
      };
    });
  }

  return (
    <>
      <header id="header">
        <img src={logo} alt="Logo" />
        <h1>React Investment Calculator</h1>
      </header>

      <UserInput  onChangeProp={handleChange} userInput={userInput}/>
     {!inputIsValid && (
        <p className="center">Please enter a duration greater than zero.</p>
      )}
      {inputIsValid && <Results input={userInput} />}
    </>
  );
}

export default App;
