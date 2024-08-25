# Compound Interest Calculator

This project is a simple React application that calculates the future value of an investment based on user inputs for the initial amount, monthly contributions, annual interest rate, and the number of years. The application uses various React components to handle user input and display the calculated results.

## Table of Contents

- [Installation](#installation)
- [Usage](#usage)
- [Components](#components)
- [Concepts Used](#concepts-used)
- [License](#license)

## Installation

1. Clone the repository:
   ```bash
   git clone https://github.com/your-username/compound-interest-calculator.git
   ```
2. Navigate to the project directory:
   ```bash
   cd compound-interest-calculator
   ```
3. Install the dependencies:
   ```bash
   npm install
   ```

## Usage

1. Start the development server:
   ```bash
   npm start
   ```
2. Open your browser and navigate to `http://localhost:3000`.

## Components

### `App`

The main component that manages the state and renders the layout. It includes the following state variables:
- `initAmount`: Initial investment amount.
- `monthlyContribution`: Monthly contribution amount.
- `interestRate`: Annual interest rate.
- `numberOfYears`: Number of years for the investment.
- `finalValue`: Final calculated value after compound interest.

### `Layout`

A wrapper component that provides the overall structure of the application.

### `NumericInput`

A component for numeric input fields. It takes the following props:
- `title`: The label for the input field.
- `symbol`: The symbol to display next to the input value (e.g., ₹, %).
- `value`: The current value of the input field.
- `setValue`: The function to update the value.

### `SliderInput`

A component for a slider input to select the number of years. It takes the following props:
- `title`: The label for the slider.
- `value`: The current value of the slider.
- `setValue`: The function to update the value.

### `CalculateButton`

A button component that triggers the calculation of compound interest. It takes the following prop:
- `evaluate`: The function to call when the button is clicked.

### `CalculatedAmounts`

A component that displays the calculated final value and other details. It takes the following props:
- `finalValue`: The calculated final value.
- `numberOfYears`: The number of years for the investment.
- `monthlyContribution`: The monthly contribution amount.
- `reset`: The function to reset all input fields.
- `initAmount`: The initial investment amount.

## Concepts Used

- **React Hooks**: The application uses the `useState` hook to manage state within the `App` component.
- **Component Composition**: The application is composed of multiple reusable components, each responsible for a specific part of the UI.
- **Event Handling**: Functions like `calculateCompoundInterest` and `reset` handle user interactions and update the state accordingly.
- **Conditional Rendering**: The application conditionally renders either the input fields or the calculated results based on whether `finalValue` is `null`.

## License

This project is licensed under the MIT License. See the [LICENSE](LICENSE) file for details.

---

Feel free to customize this README file further to suit your project's needs!
