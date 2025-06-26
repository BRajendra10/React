import { useState } from 'react';
import Fiction from "./components/Fiction";
import NonFiction from "./components/NonFiction"

import './app.css'

function App() {
  const [text, setText] = useState("Show Non-Fiction Bookss")

  const handleClick = () => {
    if(!text.includes("Non")){
      setText("Show Non-Fiction Books")
    }else{
      setText("Show Fictional Books")
    }
  }

  return (
    <div className="main-container">
      <h1>Mini Books Store</h1>

      <button data-testid="toggle-btn" onClick={handleClick}>{text}</button>

      <div data-testid="conditional-container">
        {
          (text.includes("Non")) ? (
            <Fiction />
          ) : (
            <NonFiction />
          )
        }
      </div>
    </div>
  );
}

export default App;
