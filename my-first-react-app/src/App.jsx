// react icons
import { FaRegHeart, FaHeart } from "react-icons/fa";
import { FaArrowLeftLong } from "react-icons/fa6";

// functions
import Header from './components/Header';
import Body from './components/body';
import Footer from "./components/footer";

import './App.css'
import './index.css'

function App() {

  return (
    <div className="container">
      <div className="card">
        <Header />

        <Body />

        <Footer />
      </div>
    </div>
  );
}

export default App