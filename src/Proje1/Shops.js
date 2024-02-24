import React, { useState } from 'react'
import { Card, Button, Container, Row, Col } from 'react-bootstrap'
import Project from '../Project'
import Item from './Item'
import { useLocation } from 'react-router-dom'
export default function Shops() {
    const [items, setItem] = useState(Project)
    let location = useLocation()
    console.log(location)
    return (
        <div className='mt-5'>
            <Container>
                <Row>
                    {items.map(item => (
                        <Col>
                            <Item key={item.id} {...item} />
                        </Col>
                    ))}
                </Row>
            </Container>
        </div>
    )
}
