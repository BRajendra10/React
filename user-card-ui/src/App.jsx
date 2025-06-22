// index.css file with tailwind css
import './index.css'

// Comopnents
import Header from './components/Header';
import User from './components/User';
import Body from './components/Body';

function App() {
  return (
    <div className="flex justify-center items-center w-full h-screen bg-blue-50">
      <div className="w-[420px] h-[440px] relative bg-white shadow-2xl rounded-xl p-3">

        {/** Header - banner **/}
        <Header />

        {/** Header - user image**/}
        <User />

        {/** User card body **/}
        <Body />

      </div>
    </div>
  )
}

export default App
