import { Route,Routes } from 'react-router-dom';
import './App.css';
import Home from'./components/Home'
import IT from './components/IT'



function App() {
  return (
    <Routes>

    <Route path="/" element={<Home/>}/>
     <Route path="/IT/*" element={<IT/>}/>
     

    </Routes>
  );
}

export default App;
