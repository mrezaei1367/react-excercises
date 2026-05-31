import { useState } from 'react';
import UserInput from "./components/UserInput.jsx"
import Header from "./components/Header.jsx"
import Results from "./components/Results.jsx"


function App() {
  // console.log(calculateInvestmentResults({
  //   initialInvestment: 15000,
  //   annualInvestment: 900,
  //   expectedReturn: 56,
  //   duration: 10,
  // }));
  // return (
  //   <h1>React Investment Calculator</h1>
  // )
  const [userInput, setUserInput] = useState({
    initialInvestment: 15000,
    annualInvestment: 900,
    expectedReturn: 56,
    duration: 10,
  });

  const inputIsValid = userInput.duration >= 1;

  function handleChange(inputIdentifier, newValue) {
    setUserInput((prevUserInput) => {
      return {
      ...prevUserInput,
      [inputIdentifier]: +newValue
      };
    });
}
  return (
    <div>
      <Header />
      <UserInput userInput={userInput} onChange={handleChange}  />
      {!inputIsValid && <p className="center">Please enter a valid duration (at least 1 year).</p>}
      {inputIsValid && <Results input={userInput} />}
    </div>
  )
}

export default App
