import React, { useState, useEffect } from 'react';
import './signup.css';

import Form from 'react-bootstrap/Form';
import Col from 'react-bootstrap/Col';
import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';



const Login = () => {

    const [userData, setUserData] = useState({
        email: '',
        password: ''
    });

    const validateUser = (email, pass) => {

        let user = localStorage.getItem("user");
        user = JSON.parse(user);
        console.log(user);
        console.log('email : ',email[0]);
        console.log('pass :', pass[0]);
        if(email[0] !== user.email[0] || pass[0] !== user.password[0]){
            console.log("sorry Wrong Username or Password !");
        }else{
            
            JSON.stringify(localStorage.setItem("userStatus", "true"));
            window.location.assign('/episodes');
            console.log("Logged In");

        }
    }


    const handleData = (e) => {
        setUserData({
            ...userData,
            [e.target.name]: [e.target.value]
        });
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        setTimeout(() => {
            return validateUser(userData.email, userData.password);
        }, 1000);
    }

    return(
        <Container id="signup" className="border-none ">
            <Form onSubmit={handleSubmit}
                    className="border-none shadow-lg my-5 d-flex flex-column  animate__animated animate__bounceInUp bg-dark">
                
                <h1 className="text-center my-5 text-primary font-weight-normal font-italic animate__animated animate__pulse">
                    Log In
                </h1>
                {/* Email */}
                <Form.Row>
                    <Col md={3} lg={3} xl={3} className="col">
                        <Form.Group controlId="formBasicEmail">
                            <Form.Label className="text-white">Email</Form.Label>
                            <Form.Control type="email" placeholder="eg: breakingBad@domain.com" onBlur={handleData} name="email" required/>
                            <span id="email"></span>
                        </Form.Group>
                    </Col>
                </Form.Row>
                {/* Password */}
                <Form.Row>
                    <Col md={3} lg={3} xl={3} className="col">
                        <Form.Group controlId="formBasicPassword">
                            <Form.Label className="text-white">Password</Form.Label>
                            <Form.Control type="password" placeholder="Password" onBlur={handleData} name="password" required />
                        </Form.Group>
                    </Col>    
                </Form.Row>
                <Button type="submit" className="signup my-5">Log In</Button>
            </Form>
        </Container>
    );
}

export default Login;