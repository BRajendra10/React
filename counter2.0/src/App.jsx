import { useState } from 'react';

function App() {
  const [counter, setCounter] = useState(0);

  function checkPrime(num) {
    if (num <= 1) return false;

    for (let i = 2; i < num; i++) {
      if (num % i === 0) {
        return false;
      }
    }
    return true;
  }

  const isPrime = checkPrime(counter);

  return (
    <div>
      <>
        <button data-testid="minusonebtn" disabled={counter < 1} onClick={() => setCounter(counter - 1)} >-</button>
        <button data-testid="plusonebtn" onClick={() => setCounter(counter + 1)} >+</button>
        <div>
          <button data-testid="resetbtn" onClick={() => setCounter(0)} >reset</button>
        </div>
      </>
      <span data-testid="counter">{counter}</span>
      <div>
        <span data-testid="odd-or-even">{counter % 2 === 0 ? "Even" : "Odd"}</span>
        <br />
        <span data-testid="is-prime">{isPrime? "true" : "false"}</span>
      </div>
    </div >
  );
}

export default App;

