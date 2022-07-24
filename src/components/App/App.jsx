import './App.css';
import GameTable from "../GameTable/GameTable";
import Navbar from "../Navbar/Navbar";
import Registration from "../Registration/Registration.jsx"
import Home from '../Home/Home.jsx'

import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";
import Backvideo from '../Backvideo/Backvideo.jsx';

function App() {

  return (
    <div className="App">

      <BrowserRouter>
      <Navbar/>
      <Backvideo/>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/game" element={<GameTable />} />
          <Route path="/reg" element={<Registration />} />
        </Routes>
      </BrowserRouter>

    </div>
  );
}

export default App;

