import './App.css';
import User_card from './components/User-card';

function App() {
  return (
    <div className="flex justify-center items-center min-h-screen bg-gradient-to-br from-gray-100 to-gray-200 px-4">
      <User_card name="Rajendra" posts="1,841" avatar="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTO8m28BEXmvQe2uwuTbrpd3srS29A3CRyALg&s" />
    </div>
  );
}

export default App;
