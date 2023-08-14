import Home from './Home.js';
import './styles/App.css';

import {BrowserRouter as Router,Routes,Route} from 'react-router-dom';
import Movie from './Movie.js';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="/Movie" element={<Movie/>}/>
        
      </Routes>
    </Router>
  );
}

export default App;
