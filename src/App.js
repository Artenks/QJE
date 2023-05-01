import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'

import Home from "./pages/Home"
import GameEmoji from './pages/GameEmoji'

function App() {
  return (
   <Router>
    <Routes>
      <Route path='/' element={<Home/>}/>
      <Route path='/emoji' element={<GameEmoji/>}/>
    </Routes>
   </Router>
   
  );
}

export default App;
