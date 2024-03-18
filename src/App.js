import './App.css';
import About from './pages/About';
import Contact from './pages/Contact';
import Home from './pages/Home';
import { Route, Routes, Navigate } from 'react-router-dom';

function App() {
  const element = <Home/>;
  return (
      <Routes>
        <Route path="/jdc/" element={element}/>
        <Route path="/jdc/home" element={<Home/>}/>
        <Route path="/jdc/aboutus" element={<About/>}/>
        <Route path="/jdc/contactus" element={<Contact/>}/>
        {/* <Route path="*" element={<Navigate to="/404"/>} /> */}
      </Routes>
  );
}

export default App;
