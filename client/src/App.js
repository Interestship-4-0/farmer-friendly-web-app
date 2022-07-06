import { Routes,Route } from 'react-router-dom';
import './App.css';
import LandingPage from './pages/landingPage/landingPage';
import Dashboard from './pages/Dashboard/dashboard';
import Sell from './pages/Sell/sell';

function App() {
  return (
    // <Routes>
    //   <Route path="/" element={<LandingPage/>}></Route>
    // </Routes> 
    <>
    {/* <LandingPage/> */}
    <Dashboard/>
    <Sell/>
    </>

  );
}

export default App;
