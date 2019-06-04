import React from 'react';
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';
import { Link } from 'react-router-dom';

class Home extends React.Component {
  render() {
    const initialGame = this.props.games.find(game => parseInt(game.id) === 21);
    console.log(initialGame);
    return initialGame === undefined ? <p>Loading...</p> :(
      <React.fragment>
        <Card>
          <Card.Header>Hi parent! It's week 1 of 8</Card.Header>
          <Card.Body>
            <Card.Title>{initialGame.name}</Card.Title>
            <Card.Text>
              {initialGame.description}
            </Card.Text>
            <Button variant="primary">Play new game</Button>
          </Card.Body>
        </Card>
        <div>
          {this.props.games.map(game => 
            <Card>
              <Card.Img variant="top" src={game.image_url} />
              <Card.Body>
                <Card.Title>{game.name}</Card.Title>
                <Card.Text>
                  {game.description}
                </Card.Text>
                <Link to={`/game/${game.id}`}><Button variant="primary">Go to {game.name}</Button></Link>
              </Card.Body>
            </Card>
          )}
        </div>
      </React.fragment>
    );
  }
}

export default Home;