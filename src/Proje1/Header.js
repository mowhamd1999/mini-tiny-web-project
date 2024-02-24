import React from 'react'
import { Nav, Navbar, Container } from 'react-bootstrap'
import { Link, Route, Routes, NavLink } from 'react-router-dom'
import Shops from './Shops'
import './Project.css'
import { CleaningServices } from '@mui/icons-material'
export default function Header() {
    return (
        <div>
            <Navbar bg="dark" data-bs-theme="dark">
                <Container>
                    <Link to="/" style={{textDecoration:'none',color: 'red' , fontSize: '25px'}}
                    className={(link) => link.isActive ? 'active' : 'notactive'}
                    >Navbar</Link>
                    <Nav className="me-auto">
                        <NavLink to="/Home" style={{ textDecoration: 'none', paddingLeft: "15px" }}
                            className={(link) => link.isActive ? 'active' : 'notactive'}
                        >Home</NavLink>
                        <NavLink to="/Content" style={{ textDecoration: 'none', paddingLeft: "15px" }}
                        className={(link) => link.isActive ? 'active' : 'notactive'}
                        >Content</NavLink>
                        <NavLink to="/Shop" style={{ textDecoration: 'none', paddingLeft: "15px" }}
                        className={(link) => link.isActive ? 'active' : 'notactive'}
                        >Shop</NavLink>
                        <NavLink to="/Panel" style={{ textDecoration: 'none', paddingLeft: "15px" }}
                        className={(link) => link.isActive ? 'active' : 'notactive'}
                        >Panel</NavLink>
                    </Nav>
                </Container>
            </Navbar>
        </div>
    )
}
