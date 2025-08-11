import './App.css'
import Navbar from './components/Navbar'
import AllRoutes from './routes/AllRoutes'

function App() {

  return (
    <div className="w-full h-screen flex flex-col gap-5">
      <Navbar />
      
      <AllRoutes />
    </div>
  )
}

export default App
