import { useState } from 'react';
import { InputBox } from './components'; // Assuming you have a component named InputBox
import useCurrencyInfo from './hooks/useCurrencyInfo'; // Assuming you have this hook

function App() {
  const [amount, setAmount] = useState(0);
  const [from, setFrom] = useState('usd');
  const [to, setTo] = useState('inr');
  const [convertedAmount, setConvertedAmount] = useState(0);

  const currencyInfo = useCurrencyInfo(from); // Fetch currency info from your hook

  const options = Object.keys(currencyInfo); // Get available currency options

  const swap = () => {
    setFrom(to);
    setTo(from);
    setConvertedAmount(amount);
    setAmount(convertedAmount);
  };

  const convert = () => {
    setConvertedAmount((amount * currencyInfo[to]).toFixed(2)); // Format with 2 decimal places
  };

  return (
    <div
      className="w-full h-screen flex flex-wrap justify-center items-center bg-cover bg-no-repeat"
      style={{
        backgroundImage: `url('data:image/jpeg;base64,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')`,
      }}
    >
      <div className="w-full">
        <div className="w-full max-w-md mx-auto border border-gray-60 rounded-lg p-5 backdrop-blur-sm bg-white/30">
          <form
            onSubmit={(e) => {
              e.preventDefault();
              convert();
            }}
          >
            <div className="w-full mb-1">
              <InputBox
                label="From"
                amount={amount}
                currencyOptions={options}
                // onCurrencyChange={(currency) => setAmount(amount)} // Not needed here
                selectCurrency={from}
                onAmountChange={(amount) => setAmount(parseFloat(amount))} // Ensure amount is a number
              />
            </div>
            <div className="relative w-full h-0.5">
              <button
                type="button"
                className="absolute left-1/2 -translate-x-1/2 -translate-y-1/2 border-2 border-white rounded-md bg-blue-600 text-white px-2 py-0.5"
                onClick={swap}
              >
                swap
              </button>
            </div>
            <div className="w-full mt-1 mb-4">
              <InputBox
                label="To"
                amount={convertedAmount}
                currencyOptions={options}
                onCurrencyChange={(currency) => setTo(currency)} // Update 'to' currency
                selectCurrency={to} // Use 'to' for the dropdown
                amountDisable
              />
            </div>
            <button type="submit" className="w-full bg-blue-600 text-white px-4 py-3 rounded-lg">
              Convert {from.toUpperCase()} to {to.toUpperCase()}
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}

export default App;