import React from 'react';

// Component to display calculated amounts
export default function CalculatedAmounts(props) {
  // Destructure props to extract necessary values
  const { finalValue, reset, monthlyContribution, numberOfYears, initAmount } = props;

  // If finalValue is null, return nothing (null)
  if (!finalValue) { return null; }

  // Log the parsed values for debugging purposes
  console.log(parseInt(numberOfYears), parseInt(monthlyContribution), parseInt(initAmount));

  // Calculate different amounts
  const amounts = {
    'Compounded Amount': finalValue, // The final compounded amount
    'Ordinary Amount': parseInt(numberOfYears) * parseInt(monthlyContribution) * 12 + parseInt(initAmount), // Total amount without compounding
    'Difference': finalValue - (parseInt(numberOfYears) * parseInt(monthlyContribution) * 12 + parseInt(initAmount)) // Difference between compounded and ordinary amounts
  };

  return (
    <div className='bg-teal-900 rounded text-white flex flex-col gap-6 p-4'>
      {/* Iterate over the amounts object and display each amount */}
      {Object.keys(amounts).map((amount, amountIndex) => {
        return (
          <div key={amountIndex} className='flex items-center gap-2'>
            <h2 className='text-lg font-semibold sm:text-xl md:text-2xl '>{amount}</h2>
            <p>
            {amounts[amount].toFixed(2)}₹ {/* Format the amount to 2 decimal places */}
            </p>
          </div>
        );
      })}
      {/* Button to reset the input fields and calculated values */}
      <button className='px-4 py-2 text-center border-2 border-solid hover:bg-red-500 border-white font-bold text-white rounded ' onClick={reset}>Reset
      </button>
    </div>
  );
}
