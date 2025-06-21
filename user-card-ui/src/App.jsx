import { FaBeer } from 'react-icons/fa';
import { IoMdHeart } from "react-icons/io";
import userImage from "./assets/User-1.png";

import './index.css'

function App() {
  return (
    <div className="flex justify-center items-center w-full h-screen bg-blue-50">
      <div className="w-[400px] h-[440px] relative bg-white shadow-2xl rounded-xl p-3">
        {/** Header - banner **/}
        <div className="flex justify-center items-center w-full h-[110px] bg-slate-900 rounded-xl">
          <h1 className="text-slate-300 text-xl font-medium">Design + Code</h1>
        </div>

        {/** Header - user image**/}
        <div className="rounded-full bg-slate-900 w-[90px] h-[90px] absolute top-[88px] left-8 border-4 border-violet-50">
          <img src={userImage} className="w-full rounded-full" alt="user-image" />
        </div>


        
      </div>
    </div>
  )
}

export default App
