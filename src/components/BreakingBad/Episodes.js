import React, { useState, useEffect } from 'react';
import { getEpisodes } from './API';
import Cards from '../comp/Cards';

import CardDeck from 'react-bootstrap/CardDeck';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';

const Episodes = () => {

    const [episodesData, setEpisodesData] = useState([]);

    const verifyUser = () => {
        const user = JSON.parse(localStorage.getItem("userStatus"));
        console.log('user Status: ', user);

        if(user !== true){
            alert("Please Login !")
            return window.location.assign('/login'); 
        }
    }
    verifyUser();

    useEffect(async () => {
        const data = await getEpisodes();
        await setEpisodesData(data);
        
        console.log(episodesData);
    }, []);

    return (
        <section>
            <Row>
                <Col><h1 className="h1 display-3 my-5 text-center text-secondary">Episodes Info</h1></Col>
            </Row>

            <CardDeck className="d-flex flex-wrap">
            {
                (episodesData === undefined) ? 'Loading...' : (
                    episodesData.map((data, index) => {
            
                        if(data.series !== 'Breaking Bad'){
                            return null;
                        }else{
                            return (
                            <Col xs={12} sm={12} md={4} lg={3} >
                                <Cards key={index} title={data.title} series={data.series} season={data.season} 
                                    episode={data.episode} episode_id={data.episode_id} air_date={data.air_date} />
                            </Col>
                            );
                        }
                        
                    }) //map
                )//ternary operator
            }
            </CardDeck>
        </section>

        
    )

}


export default Episodes;