import React from 'react';
import Card from 'react-bootstrap/Card';
import Col from 'react-bootstrap/Col';
// import './Cards.css';

const CharacterCard = (props) => {

    const { birthday, category, char_id, img, name, nickname, portrayed, status, occupation } = props.charInfo;

    // console.log(props);

    

    return(
        <Col xs={12} sm={12} md={4} lg={3}>
            <Card className="card my-3 shadow-lg text-center">
                <Card.Img variant="top" src={img} className="img" />
                <Card.Title>{name} </Card.Title>
                <Card.Subtitle className="text-muted">{nickname}</Card.Subtitle>

                <Card.Body>
                    {
                        (birthday === "Unknown") ? null :  ( <p> <span className="text-muted"> Birthday :</span> {birthday}</p> )
                    }

                    <span className="text-muted">Played As : </span> {occupation[0]} <br />

                    <span className="text-muted"> Status: </span> {status} 
                </Card.Body>

                <Card.Footer>
                    <small className="text-muted">
                        Portrayed By: <strong>{portrayed}</strong>
                    </small>
                </Card.Footer>
            </Card>
        </Col>
    )
}

export default CharacterCard;