import React, { useState, useEffect } from 'react';
import Button from 'react-bootstrap/Button';
import Col from 'react-bootstrap/Col';
import Form from 'react-bootstrap/Form';
import InputGroup from 'react-bootstrap/InputGroup';
import Row from 'react-bootstrap/Row';
import Table from 'react-bootstrap/Table';
import { Container } from 'react-bootstrap';
import { Await } from 'react-router-dom';
import { TiUserDelete } from "react-icons/ti";
import { FaUserEdit } from "react-icons/fa";
import { Modal } from 'react-bootstrap';
function FormExample() {

    const [showEdit, setShowEdit] = useState(false)
    const editHandler = async (event) => {
        let newUser = {
            firstName,
            lastName,
            City
        }
        setFirstName('')
        setLastName('')
        setCity('')
        setShowEdit(false)
        console.log(newUser)
        await fetch(`https://mohammads-project-95368-default-rtdb.firebaseio.com/users/${userid}.json`, {
            method: "PUT",
            body: JSON.stringify(newUser)
        }).then(response => console.log(response))
        setGetData(prev => !prev)
    }
    ///////////////////////////////////////// for Edit 
    const [userid, setUserId] = useState('')
    const [showDelete, setShowdelete] = useState(false)
    const [getData, setGetData] = useState(false)
    const RemoveHandler = async () => {
        setShowdelete(false)
        await fetch(`https://mohammads-project-95368-default-rtdb.firebaseio.com/users/${userid}.json`, {
            method: "DELETE"
        }).then(response => console.log(response))
        setGetData(prev => !prev)
    }
    ///////////////////////////////////////// for post 
    const [firstName, setFirstName] = useState('')
    const [lastName, setLastName] = useState('')
    const [City, setCity] = useState('')
    ///////////////////////////////////////// for get

    const [users, setUsers] = useState([])
    const getusers = async () => {
        await fetch('https://mohammads-project-95368-default-rtdb.firebaseio.com/users.json')
            .then(response => response.json())
            .then(data => {
                setUsers(Object.entries(data))
            })
        setGetData(prev => !prev)
    }
    useEffect(() => {
        let edituserid = users.find(user => user[0] == userid) /// user[0]=esmeid ke click shode user[1] infoshe
        if(edituserid){
            setFirstName(edituserid[1].firstName)
            setLastName(edituserid[1].lastName)
            setCity(edituserid[1].City)
            /// edituserid[1] hamon objectie hast ke etelaat tosh voojod dare
            /// va editeuserid [0] faghat id on karbar hast 1245r32wfsdf
        }
     }, [userid])
    useEffect(() => {
        getusers()
    }, [getData])
    // my database in firebase = https://mohammads-project-95368-default-rtdb.firebaseio.com/
    return (
        <Container className='mt-5'>
            <Row>
                <Table striped bordered hover variant="dark">
                    <thead>
                        <tr>
                            <th></th>
                            <th>First Name</th>
                            <th>Last Name</th>
                            <th>City</th>
                            <th>Action</th>
                        </tr>
                    </thead>
                    <tbody>
                        {users.map((user, index) => (
                            <tr>
                                <td>{index + 1}</td>
                                <td>{user[1].firstName}</td>
                                <td>{user[1].lastName}</td>
                                <td>{user[1].City}</td>
                                <td>
                                    <TiUserDelete onClick={() => {
                                        setShowdelete(true)
                                        setUserId(user[0])
                                    }} style={{ float: 'left', cursor: "pointer" }} />
                                    <FaUserEdit onClick={() => {
                                        setShowEdit(true)
                                        setUserId(user[0])
                                    }}
                                        style={{ float: "right", cursor: "pointer" }} />
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </Table>
            </Row>
            <Modal
                show={showDelete}
                aria-labelledby="contained-modal-title-vcenter"
                centered
            >
                <Modal.Header closeButton>
                    <Modal.Title id="contained-modal-title-vcenter">
                        Delete Confirm
                    </Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <h4>Your Access</h4>
                    <p>
                        Do you want to Delete this user ?
                    </p>
                </Modal.Body>
                <Modal.Footer>
                    <Button onClick={() => RemoveHandler()}>Yes</Button>
                    <Button onClick={() => setShowdelete(false)}>No</Button>
                </Modal.Footer>
            </Modal>
            <Modal
                show={showEdit}
                aria-labelledby="contained-modal-title-vcenter"
                centered
            >
                <Modal.Header>
                    <Modal.Title id="contained-modal-title-vcenter">
                        Editing
                    </Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <h4>Edit FirstName</h4>
                    <input value={firstName} onChange={(event) => setFirstName(event.target.value)} type="text" placeholder='New FirstName' />
                    <hr />
                    <h4>Edit LastName</h4>
                    <input value={lastName} onChange={(event) => setLastName(event.target.value)} type="text" placeholder='New LastName' />
                    <hr />
                    <h4>Edit City</h4>
                    <input
                        value={City} onChange={(event) => setCity(event.target.value)} type="text" placeholder='New City' />
                </Modal.Body>
                <Modal.Footer>
                    <Button onClick={editHandler}>Edit</Button>
                    <Button onClick={() => setShowEdit(false)} >Cancel</Button>
                </Modal.Footer>
            </Modal>
        </Container>
    );
}

export default FormExample;