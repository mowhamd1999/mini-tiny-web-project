import { height } from '@mui/system'
import React from 'react'
import { Card, Row, Col, Container, Button } from 'react-bootstrap'
import { Link } from 'react-router-dom'
export default function Item(props) {
    return (
        <Link to ={`/shop/${props.id}`}>
            <Card style={{ width: '300px' }}>
                <Card.Img variant="top" src={props.img} style={{width:'300px' , height:'250px'}} />
                <Card.Body>
                    <Card.Title>{props.title}</Card.Title>
                    <Card.Text>
                        {props.post}
                    </Card.Text>
                    <Button variant="primary">Seen</Button>
                </Card.Body>
            </Card>
        </Link>
    )
}
