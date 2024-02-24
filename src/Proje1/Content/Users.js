import React from 'react'
import  { useState, useEffect } from 'react';
import Button from 'react-bootstrap/Button';
import Col from 'react-bootstrap/Col';
import Form from 'react-bootstrap/Form';
import Row from 'react-bootstrap/Row';
import { Container } from 'react-bootstrap';
export default function Users() {
    const [firstName, setFirstName] = useState('')
    const [lastName, setLastName] = useState('')
    const [City, setCity] = useState('')
    const submitHandler = event => {
        event.preventDefault()
        let userInfo = {
            firstName,
            lastName,
            City,
        }
        setFirstName('')
        setCity('')
        setLastName('')
        fetch('https://mohammads-project-95368-default-rtdb.firebaseio.com/users.json', {
            method: 'POST',
            body: JSON.stringify(userInfo)
        }).then(response => console.log(response))
        return userInfo
    }
    return (
        <div>
            <Container className='mt-5'>
                <Form onSubmit={submitHandler}>
                    <Row className="mb-3">
                        <Form.Group as={Col} md="4" controlId="validationCustom01">
                            <Form.Label>First name</Form.Label>
                            <Form.Control
                                value={firstName}
                                onChange={(event) => setFirstName(event.target.value)}
                                required
                                type="text"
                                placeholder="First name"
                                defaultValue=""
                            />
                            <Form.Control.Feedback>Looks good!</Form.Control.Feedback>
                        </Form.Group>
                        <Form.Group as={Col} md="4" controlId="validationCustom02">
                            <Form.Label>Last name</Form.Label>
                            <Form.Control
                                value={lastName}
                                onChange={(event) => setLastName(event.target.value)}
                                required
                                type="text"
                                placeholder="Last name"
                                defaultValue=""
                            />
                            <Form.Control.Feedback>Looks good!</Form.Control.Feedback>
                        </Form.Group>
                    </Row>
                    <Row className="mb-3">
                        <Form.Group as={Col} md="6" controlId="validationCustom03">
                            <Form.Label>City</Form.Label>
                            <Form.Control
                                value={City}
                                onChange={(event) => setCity(event.target.value)}
                                type="text"
                                placeholder="City"
                                required />
                            <Form.Control.Feedback type="invalid">
                                Please provide a valid city.
                            </Form.Control.Feedback>
                        </Form.Group>
                    </Row>
                    <Button  type="submit">Submit form</Button>
                </Form>
            </Container>
        </div>
    )
}
