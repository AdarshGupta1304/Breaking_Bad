import React from 'react';
import Card from 'react-bootstrap/Card';
import breakingBad from './../images/Breaking Bad 0.jpg';
// import breakingBad from './../images/Breaking Bad 1.jpg';
import Badge from 'react-bootstrap/Badge';

const Cards = (props) => {
    const { title, series, season, episode, episode_id, air_date  } = props ;

    return (
        ( title === undefined ? null : 
            (<Card className="card my-3 text-center shadow">
                <Card.Img variant="top" src={breakingBad} />
                <Card.Title>{series}</Card.Title>
                <Card.Subtitle className="mb-2 text-muted">
                    {/* <Badge pill variant="secondary">Title : </Badge> */}
                    {/* Title :  */}
                    {title}
                </Card.Subtitle>
                <Card.Body>
                    Season: {season} , Episode: {episode}
                </Card.Body>
                <Card.Footer>
                    <small className="text-muted">Release_Date: {air_date}</small>
                </Card.Footer>
            </Card>)    
        )
    );
}

export default Cards ;

// key={episode_id} 