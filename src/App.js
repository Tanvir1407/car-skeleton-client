import { Route, Routes } from 'react-router-dom';
import './App.css';
import Home from './components/Home/Home';
import Navber from './components/Home/Navber';

function App() {
  return (
    <>
      <Navber></Navber>
      <Routes>
        <Route path="/" element={<Home></Home>} />
      </Routes>
    </>
  );
}

export default App;
