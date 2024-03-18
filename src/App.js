import './App.css';
import About from './pages/About';
import Contact from './pages/Contact';
import Home from './pages/Home';
import { Route, Routes, Navigate } from 'react-router-dom';

function App() {
  const element = <Home/>;
  return (
      <Routes>
        <Route path="/" element={element}/>
        <Route path="/home" element={<Home/>}/>
        <Route path="/aboutus" element={<About/>}/>
        <Route path="/contactus" element={<Contact/>}/>
        {/* <Route path="*" element={<Navigate to="/404"/>} /> */}
      </Routes>
  );
}

export default App;
