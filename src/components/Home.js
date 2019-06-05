import React from 'react';
import Slider from "react-slick";

import NavigationBar from './NavigationBar';
import logo from './../images/201-logo.svg';
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';
import { Link } from 'react-router-dom';
import Loading from "../images/Eclipse-1.5s-170px.gif"

class Home extends React.Component {
  render() {
    var settings = {
      dots: true,
      infinite: true,
      speed: 500,
      slidesToShow: 1,
      slidesToScroll: 1
    };
    const initialGame = this.props.games.find(game => parseInt(game.id) === 21);
    return initialGame === undefined ? <p>Loading...</p> :(
      <React.Fragment>
        <NavigationBar />
        <section className="header__image-section">
					<div
						className="header__image-game--landing"
						style={{ backgroundImage: `url(${logo})` }}
					/>
				</section>
        <div className="landing__initial-card">
          <Card style= {{
              backgroundColor: '#EB4C54',
              borderRadius: '5px',
              color: '#ffffff',
          }}>
            <Card.Header>Hi parent! It's week 1 of 8</Card.Header>
            <Card.Body>
              <Card.Title>{initialGame.name}</Card.Title>
              <Card.Text>
                {initialGame.description}
              </Card.Text>
              <Link to={`/game/${21}`}>
                <Button style={{
                  backgroundColor: '#ffffff',
                  color: '#EB4C54',
                  border: '1px solid #EB4C54'
                }}>Play new game</Button>
              </Link>
            </Card.Body>
          </Card>
        </div>
        <div className="carousel__landing-section">
          <Slider {...settings}>
              {this.props.games.map((game, index) => 
                <div key={index} className="carousel-card__landing-wrapper">
                  <Card className="carousel-card__landing">
                    <Card.Img variant="top" src={game.image_url} />
                    <Card.Body>
                      <Card.Title>{game.name}</Card.Title>
                      <Card.Text>
                        {game.description}
                      </Card.Text>
                      <Link to={`/game/${game.id}`}><Button >Go to {game.name}</Button></Link>
                    </Card.Body>
                  </Card>
                </div>
              )}
          </Slider>
        </div>
      </React.Fragment>
    );
  }
}

export default Home;