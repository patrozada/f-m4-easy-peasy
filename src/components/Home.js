import React from 'react';
import { Link } from 'react-router-dom';

const Home = (props) => {
  return (
    props.games.map(game => 
      <Link to={`/game/${game.id}`}><button>Go to {game.name}</button></Link>
    )
  );
}
 
export default Home;