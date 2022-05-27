import { Route, Routes } from 'react-router-dom';
import './App.css';
import Home from './components/Home/Home';
import Navber from './components/Home/Navber';
import NotFound from './components/Page/NotFound/NotFound';

function App() {
  return (
    <>
      <Navber></Navber>
      <Routes>
        <Route path="/" element={<Home></Home>} />
        <Route path='*' element={ <NotFound></NotFound>}/>
      </Routes>
    </>
  );
}

export default App;
