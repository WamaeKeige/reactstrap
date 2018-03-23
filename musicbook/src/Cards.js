import React from 'react';
import { Card, Button,FormGroup,Label,Input, CardImg, CardTitle, CardText, CardDeck,
 CardSubtitle, CardBody } from 'reactstrap';
 import sax from './images/sax.jpeg';
 import drumset from './images/drumset.jpeg';
 import piano from './images/pianog.jpeg';
import violin from './images/violin.jpeg';
import mic from './images/mic.jpeg';
import fiddle from './images/fiddle.jpeg';
import mixer from './images/mixer.jpeg';
import guitar from './images/guitar.jpeg';
import flute from './images/flute.jpeg';


const Carousel = (props) => {
  return (
    <div>
    <CardDeck>
      <Card>
        <CardImg top width="50%" src={drumset} alt="Card image cap" />
        <CardBody>
          <CardTitle>Drum Set</CardTitle>
          <CardSubtitle>Card subtitle</CardSubtitle>
          <CardText>This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</CardText>
          <Button color="link">View</Button>
        </CardBody>
      </Card>
      <Card>
        <CardImg top width="50%" src={sax} alt="Card image cap" />
        <CardBody>
          <CardTitle>Card title</CardTitle>
          <CardSubtitle>Card subtitle</CardSubtitle>
          <CardText>This card has supporting text below as a natural lead-in to additional content.</CardText>
          <Button color="link">View</Button>
        </CardBody>
      </Card>
      <Card>
        <CardImg top width="50%" src={mic} alt={"mic"} />
        <CardBody>
          <CardTitle>Card title</CardTitle>
          <CardSubtitle>Card subtitle</CardSubtitle>
          <CardText>This is a wider card with supporting text below as a natural lead-in to additional content. This card has even longer content than the first to show that equal height action.</CardText>
          <Button color="link">View</Button>
        </CardBody>
      </Card>
      </CardDeck>
      <br/>
      <CardDeck>
      <Card>
        <CardImg top width="50%" src={drumset} alt={"drumset"} />
        <CardBody>
          <CardTitle>Card title</CardTitle>
          <CardSubtitle>Card subtitle</CardSubtitle>
          <CardText>This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</CardText>
          <Button color="link">View</Button>
        </CardBody>
      </Card>
      <Card>
        <CardImg top width="50%" src={fiddle} alt={"fiddle"} />
        <CardBody>
          <CardTitle>Card title</CardTitle>
          <CardSubtitle>Card subtitle</CardSubtitle>
          <CardText>This card has supporting text below as a natural lead-in to additional content.</CardText>
          <Button color="link">View</Button>
        </CardBody>
      </Card>
      <Card>
        <CardImg top width="50%" src={violin} alt={"violin"} />
        <CardBody>
          <CardTitle>Card title</CardTitle>
          <CardSubtitle>Card subtitle</CardSubtitle>
          <CardText>This is a wider card with supporting text below as a natural lead-in to additional content. This card has even longer content than the first to show that equal height action.</CardText>
          <Button color="link">View</Button>
        </CardBody>
      </Card>
      </CardDeck>
      <CardDeck>
      <Card>
        <CardImg top width="50%" src={flute} alt={"flute"} />
        <CardBody>
          <CardTitle>Card title</CardTitle>
          <CardSubtitle>Card subtitle</CardSubtitle>
          <CardText>This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</CardText>
          <Button color="link">View</Button>
        </CardBody>
      </Card>
      <Card>
        <CardImg top width="50%" src={guitar} alt={"guitar"} />
        <CardBody>
          <CardTitle>Card title</CardTitle>
          <CardSubtitle>Card subtitle</CardSubtitle>
          <CardText>This card has supporting text below as a natural lead-in to additional content.</CardText>
          <Button color="link">View</Button>
        </CardBody>
      </Card>
      <Card>
        <CardImg top width="50%" src={mixer} alt={"mixer"} />
        <CardBody>
          <CardTitle>Card title</CardTitle>
          <CardSubtitle>Card subtitle</CardSubtitle>
          <CardText>This is a wider card with supporting text below as a natural lead-in to additional content. This card has even longer content than the first to show that equal height action.</CardText>
          <Button color="link">View</Button>
        </CardBody>
      </Card>
    </CardDeck>
    </div>
  );
};

export default Carousel;