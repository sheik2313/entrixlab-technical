
import './App.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import City from './components/Cityname';
function App() {
  return (
    <BrowserRouter>
    <Routes>
      <Route  path='/' element={<City/>}/>

    </Routes>
    </BrowserRouter>
   
  );
}

export default App;
