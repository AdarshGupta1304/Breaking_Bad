import React, { useState, useEffect } from 'react';
import Logo from './images/banner 1.jpeg';

import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';
import Button from 'react-bootstrap/Button';
import Badge from 'react-bootstrap/Badge'

import { Link } from 'react-router-dom';

const MenuBar = () => {

    const [isUser, setIsUser] = useState(false);
    const [userName, setUserName] = useState('User');

    useEffect(() => {
        let user = JSON.parse(localStorage.getItem("userStatus"));
        let userData = JSON.parse(localStorage.getItem("user"));
        console.log(userData.name[0]);
        setIsUser(user);
        setUserName(userData.name[0]);
    },[isUser])

    const logout = () => {
        JSON.stringify(localStorage.setItem("userStatus","false"));
        setIsUser(false);
    }


    return (
       <section>
           <Navbar variant="dark" bg="dark" sticky="top">
                <Navbar.Brand>
                    <img src={Logo} alt="Breaking Bad" style={{ width: 200, height: 70 }} />
                </Navbar.Brand>
                <Nav className="mr-auto">

                 <Nav.Link> 
                    <Link to="/episodes">
                        <Badge pill variant="primary"> Episodes </Badge>
                    </Link> 
                  </Nav.Link>
                 <Nav.Link> <Link to="/characters"> 
                 <Badge pill variant="primary">Characters </Badge></Link> </Nav.Link>
                </Nav>

                {
                    (isUser === true ? 
                        <Nav>
                            <h4 className="mx-4 text-white">Welcome {userName}</h4>
                            <Nav.Link> <Link to="/login"> <Button variant="danger" onClick={logout}>Log out</Button> </Link> </Nav.Link>
                        </Nav>
                     :
                     <Nav>
                        <Nav.Link><Link to="/signup">
                            <Button variant="primary">Sign Up</Button>
                        </Link></Nav.Link>
                        <Nav.Link>
                            <Link to="/login">
                                <Button variant="primary">Log In</Button>
                            </Link>
                        </Nav.Link>
                    </Nav>
                    )
                }
                


            </Navbar>
       </section>
    )
}

export default MenuBar;