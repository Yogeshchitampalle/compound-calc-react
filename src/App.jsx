import  { useState } from 'react';
import { Layout } from "./components/Layout";
import NumericInput from './components/NumericInput';
import SliderInput from './components/SliderInput';
import CalculateButton from './components/CalculateButton';
import CalculatedAmounts from './components/CalculatedAmounts';

function App() {
  // State variables to store user inputs and the final calculated value
  const [initAmount, setInitAmount] = useState(0);// Initial investment amount
  const [monthlyContribution, setMonthlyContribution] = useState(0); // Monthly contribution amount
  const [interestRate, setInterestRate] = useState(0); // Annual interest rate
  const [numberOfYears, setNumberOfYears] = useState(0); // Number of years for the investment
  const [finalValue, setFinalValue] = useState(null); // Final calculated value after compound interest

  // Function to calculate compound interest
  function calculateCompoundInterest() {
    let total = parseInt(initAmount); // Start with the initial amount
    let annualContribution = parseInt(monthlyContribution) * 12; // Convert monthly contribution to annual
    for (let i = 0; i < parseInt(numberOfYears); i++) {
      total += annualContribution; // Add annual contribution each year
      total *= 1 + parseInt(interestRate) / 100; // Apply interest rate
    }
    setFinalValue(total); // Update the final value state
  }

  // Function to reset all input fields and the final value
  function reset() {
    setInitAmount(0);
    setMonthlyContribution(0);
    setInterestRate(0);
    setFinalValue(null);
    setNumberOfYears(0);
  }

  return (
    <Layout>
      {finalValue ? (
        // Display the calculated amounts if finalValue is not null
        <CalculatedAmounts
          finalValue={finalValue}
          numberOfYears={numberOfYears}
          monthlyContribution={monthlyContribution}
          reset={reset}
          initAmount={initAmount}
        />
      ) : (
        // Display input fields and calculate button if finalValue is null
        <>
          <NumericInput
            title={'Initial Amount'}
            symbol={'₹'}
            value={initAmount}
            setValue={setInitAmount}
          />
          <NumericInput
            title={'Monthly Contribution'}
            symbol={'₹'}
            value={monthlyContribution}
            setValue={setMonthlyContribution}
          />
          <NumericInput
            title={'Interest Rate'}
            symbol={'%'}
            value={interestRate}
            setValue={setInterestRate}
          />
          <SliderInput
            title={'Number of Years'}
            value={numberOfYears}
            setValue={setNumberOfYears}
          />
          <CalculateButton evaluate={calculateCompoundInterest} />
        </>
      )}
    </Layout>
  );
}

export default App;
