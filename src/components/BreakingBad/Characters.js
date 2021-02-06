import React ,{ useState, useEffect } from 'react';
import { getCharacters } from './API';
import CharacterCard from './../comp/CharacterCard';
import CardDeck from 'react-bootstrap/CardDeck';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

const Characters = () => {

    const [actors, setActors] = useState([]);

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
        try{
        const charactersData = await getCharacters();
        // console.log(charactersData);
        await setActors(charactersData);
        // await console.log(actors);
        }catch(err){
            console.log(err);
        }
    }, []);

    return (
            <section>
                    <Row>
                        <Col><h1 className="h1 display-3 my-5 text-center text-secondary">Characters Info</h1></Col>
                    </Row>
                <CardDeck>
                    {
                        (actors === undefined) ? 'Loading...' : (
                            actors.map((char,index) => {
                                return (
                                    <CharacterCard key={index} charInfo={char} />
                                )
                            })                        
                        )//ternary op
                    }
                </CardDeck>
            </section>
        
    )//return
}//component

export default Characters;