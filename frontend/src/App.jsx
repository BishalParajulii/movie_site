import './css/App.css'
import Home from './pages/Home';
import Favorite from './pages/Favorites';
import NavBar from './components/NavBar';
import { BrowserRouter, Routes, Route } from "react-router-dom";

function App() {
  return (
    <BrowserRouter>
      <NavBar />
      <main className='main-content'>
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/favorites' element={<Favorite />} />
        </Routes>
      </main>
    </BrowserRouter>
  );
}

export default App;
