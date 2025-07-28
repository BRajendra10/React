import Navbar from "./components/Navbar"
import NavRoutes from "./routes/NavRoutes"

function App() {

  return (
    <div className="w-full h-screen grid grid-rows-12 gap-5">
      <Navbar />

      <NavRoutes />
    </div>
  )
}

export default App
