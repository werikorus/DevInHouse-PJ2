import React from 'react';
import { About } from './About';
import { GamesNews } from './GamesNews';
import { GameDetails } from './GameDetails';
import { BrowserRouter as Router, Route, Routes} from 'react-router-dom';
import { LatestNews } from './LatestNews';


function Rotas() {
  return (
    <Router>
      <Routes>
        <Route path="/" exact element={<GamesNews/>} /> 
        <Route path="/GameDetails/:idGame" element={<GameDetails/>} />
        <Route path="/latestNews" exact element={LatestNews()} />
        <Route path="/about" exact element={About()} />  
        <Route path="*" exact element={(<h1>SORRY, PAGE NOT FOUND!</h1>)} />                   
      </Routes>
    </Router>
  );
};

export default Rotas;
