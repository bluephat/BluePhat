import React, {Component} from 'react';
import {
  Card,  CardImg,  CardText, CardDeck, CardBody
} from 'reactstrap';
import blog from './layoutimages/blogicon.png'
import bis from './layoutimages/bisicon.png'
import clan from './layoutimages/clansicon.png'
import forum from './layoutimages/forum.png'

export default class MainCards extends Component {
    static displayName = MainCards.name;
    render(){
  return (
    <CardDeck>
      <Card>
        <CardImg top width="100%" src={blog} alt="Card image cap" />
        <CardBody>
            <CardText>Keep up to date with OSRS updates, events, and development feeds</CardText>
        </CardBody>
      </Card>
      <Card>
        <CardImg top width="100%" src= {bis}  alt="Card image cap" />
        <CardBody>
            <CardText>Calculate best in slot equipment for your character specific combat skill levels.</CardText>
        </CardBody>
      </Card>
      <Card>
        <CardImg top width="100%" src={clan} alt="Card image cap" />
        <CardBody>
            <CardText>Find OSRS communities that fit your interests, gameplay style, and region.</CardText>
        </CardBody>
      </Card>
      <Card>
        <CardImg top width="100%" src={forum} alt="Card image cap" />
        <CardBody>
            <CardText>Chat with members of the community, and find answers to questions you might have.</CardText>
        </CardBody>
      </Card>
    </CardDeck>
  );
    };
}
