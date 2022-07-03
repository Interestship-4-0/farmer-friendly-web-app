import { Routes,Route } from 'react-router-dom';
import './App.css';
import Footer from './Components/footer/footer';
import Contact from './Components/ContactUs/Contact'
import LandingPage from './pages/landingPage/landingPage';

function App() {
  return (
    <Routes>
      <Route path="/" element={<LandingPage/>}></Route>
    </Routes> 
  );
}

export default App;
