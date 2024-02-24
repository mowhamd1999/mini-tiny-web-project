import React from 'react'
import { useParams } from 'react-router-dom'
import { Container, Col, Row, Button } from 'react-bootstrap'
import Project from '../Project'
import { Link } from 'react-router-dom'
export default function MainItem() {
    let params = useParams()
    let MainItem = Project.find(item => item.id == params.Item)
    console.log(MainItem)
    return (
        <div>
            <Container style={{ marginTop: '100px' }}>
                <Row>
                    <Col>
                        <img src={MainItem.img} style={{ width: '90%', height: '270px' }} />
                    </Col>
                    <Col>
                        <h2>{MainItem.title}</h2>
                        <hr />
                        <h3>{MainItem.post}</h3>
                        <hr />
                        <h5>{MainItem.content}</h5>
                        <hr />
                        <Button variant="success">Buy</Button>
                        <Link to='/shop'>
                            <Button style={{ marginLeft: "20px" }} variant="danger">Back</Button>
                        </Link>
                        <p style={{ float: "right" }}>{MainItem.price} : فیمت</p>
                    </Col>
                </Row>
            </Container>
        </div>
    )
}
