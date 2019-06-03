import React from 'react';
import CarouselInstructions from './CarouselInstructions';
import CarouselLevel1 from './CarouselLevel1';
import CarouselLevel2 from './CarouselLevel2';
import Card from 'react-bootstrap/Card'


class Carousel extends React.Component{
  render(){
    return(
      <div>
        <Card>
          <Card.Body>
            <CarouselInstructions game = {this.props.game}/>
          </Card.Body>
        </Card>
        <Card>
          <Card.Body>
            <CarouselLevel1 game = {this.props.game}/>
          </Card.Body>
        </Card>
        <Card>
          <Card.Body>
            <CarouselLevel2 game = {this.props.game}/>
          </Card.Body>
        </Card>
      </div>

    )
  }
}
export default Carousel;