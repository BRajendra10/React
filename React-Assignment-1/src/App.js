import "./App.css";
import MobileOS from "./components/MobileOS";

import data from "./db";

function App() {
  return (
    data.map((el) => {
      return <div className="Card-container">
        <MobileOS heading={el.heading}  lists={el.list}/>
      </div>
    })
  );
}

export default App;
