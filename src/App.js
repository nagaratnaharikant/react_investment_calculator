import { useState } from "react";
import Header from "./components/Header";
import InvestmentForm from "./components/InvestmentForm";
import ResultData from "./components/ResultData";

function App() {
  const [userInput, setUserInput] = useState(null);
  const calculateHandler = (userInput) => {
    setUserInput(userInput);
  };
  const yearlyData = []; // per-year results
  if (userInput) {
    let currentSavings = +userInput["currentSaving"];
    const yearlyContribution = +userInput["yearlyContr"];
    const expectedReturn = +userInput["expInterest"] / 100;
    const duration = +userInput["duration"];

    // The below code calculates yearly results (total savings, interest etc)
    for (let i = 0; i < duration; i++) {
      const yearlyInterest = currentSavings * expectedReturn;
      currentSavings += yearlyInterest + yearlyContribution;
      yearlyData.push({
        // feel free to change the shape of the data pushed to the array!
        year: i + 1,
        yearlyInterest: yearlyInterest,
        savingsEndOfYear: currentSavings,
        yearlyContribution: yearlyContribution,
      });
    }
  }
  return (
    <>
      <Header />
      <InvestmentForm onCalculate={calculateHandler} />
      {!userInput && <p className="no-invest">No investment calculated yet...</p>}
      {userInput && (
        <ResultData
          data={yearlyData}
          initialInvestment={userInput.currentSaving}
        />
      )}
    </>
  );
}

export default App;
