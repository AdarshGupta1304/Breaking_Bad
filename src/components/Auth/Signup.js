import React, { useState, useEffect } from 'react';
import './signup.css';


import Form from 'react-bootstrap/Form';
import Container from 'react-bootstrap/Container';
import Col from 'react-bootstrap/Col';
// import Row from 'react-bootstrap/Row';
import Button from 'react-bootstrap/Button';


const Signup = () => {
    
    const [userData, setUserData] = useState({
        name: '',
        email: '',
        password: '',
    });

    const [confirmPassword, setConfirmPassword] = useState('');

    const setData = () => {
        window.localStorage.setItem("user", JSON.stringify(userData));
    }

    const handleChange = async (e) => {
        await setUserData({ 
            ...userData,
            [e.target.name] : [e.target.value],
        });
    }

    const handleConfirmPass = async (e) => {
        await setConfirmPassword(e.target.value);
        console.log(confirmPassword);
    }

    const checkPassword = () => {
        console.log('pass: ',userData.password[0]);
        console.log('conPass: ',confirmPassword);

        if((userData.password[0]) === confirmPassword){
            return true;
        }
        return false;
    }

    const handleSubmit = (e) => {

        e.preventDefault();
        const res = checkPassword();

        // console.log('checking pass', res);
        if(!res)
             return alert('Passwords are not the same!');
        setData();           
        // console.log('submit data is : ',userData);
        console.log('submitted'); 
        window.location.assign('/login');
    }

    

    return(
        <Container id="signup" >
        
            <Form onSubmit={handleSubmit} className="border-none shadow-lg d-flex flex-column my-5 animate__animated animate__bounceInUp bg-dark"  >
                <h1 className="text-center my-5 text-primary font-weight-normal font-italic animate__animated animate__pulse">
                    Sign Up
                </h1>
                {/* Name */}
                <Form.Row>
                    <Col md={3} lg={3} xl={3} className="col">
                        <Form.Group controlId="formBasicName">
                            <Form.Label className="text-white">Name</Form.Label>
                            <Form.Control type="text" placeholder="eg: Nick Jonas" name="name" onBlur={handleChange} required />
                        </Form.Group>
                    </Col>
                </Form.Row>
                {/* Email */}
                <Form.Row>
                    <Col md={3} lg={3} xl={3} className="col">
                        <Form.Group controlId="formBasicEmail">
                            <Form.Label className="text-white">Email</Form.Label>
                            <Form.Control type="email" placeholder="eg: breakingBad@gmail.com" name="email" onBlur={handleChange} required />
                        </Form.Group>
                    </Col>
                </Form.Row>
                {/* Password */}
                <Form.Row>
                    <Col md={3} lg={3} xl={3} className="col">
                        <Form.Group controlId="formBasicPassword">
                            <Form.Label className="text-white">Password</Form.Label>
                            <Form.Control type="password" placeholder="Password" name="password" onBlur={handleChange} required />
                        </Form.Group>
                    </Col>
                </Form.Row>
                {/* confirm password */}
                <Form.Row>
                    <Col md={3} lg={3} xl={3} className="col">
                        <Form.Group controlId="formBasicConfirmPassword">
                            <Form.Label className="text-white">Confirm Password</Form.Label>
                            <Form.Control type="password" placeholder="Confirm Password" name="confirmPassword"
                                             onChange={handleConfirmPass} required />
                        </Form.Group>
                    </Col>
                </Form.Row>
                <Button variant="primary" className="signup my-5" type="submit">Sign Up</Button> 

             </Form>
        </Container>
    );
}

export default Signup;