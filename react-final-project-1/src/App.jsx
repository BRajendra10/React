import Navbar from "./components/Navbar"
import NavRoutes from "./routes/NavRoutes"

function App() {

  return (
    <div className="w-full min-h-screen flex flex-col gap-5">
      <Navbar />

      <NavRoutes />
    </div>
  )
}

export default App
