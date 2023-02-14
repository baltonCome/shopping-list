import { Routes } from 'react-router-dom';
import { Route } from 'react-router-dom';
import Home from './pages/Home';
import New from './pages/New';

function App() {
  return (
    <div>
      <Routes>
        <Route index element = { <Home/> }/>
        <Route path='new' element ={<New/>}/>
      </Routes>
    </div>
  );
}

export default App;
