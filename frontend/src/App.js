import './App.css';
import {Routes,Route} from 'react-router-dom'
import Home from'./components/Home'
import IT from './components/IT'



function App() {
  return (
    <Routes>
    <Route path="/Home/*" element = {<Home/>}/>
    <Route path="/IT/*" element={<IT/>}/>
    </Routes>
  );
}

export default App;
