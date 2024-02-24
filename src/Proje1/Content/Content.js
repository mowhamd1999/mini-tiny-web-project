import React from 'react'
import { Outlet, Link, Navigate, useNavigate } from 'react-router-dom'
export default function Content() {
    let navigate = useNavigate()
    return (
        <div>
            {/* <h3 style={{ textAlign: "center" }}>Welcome to Content Page</h3>
            <button onClick={() => {
                navigate(-1)
            }}>ثبت نام در دوره</button>
            <hr />
            <div style={{ textAlign: 'center', display: 'flex', justifyContent: 'space-evenly' }}>
                <Link style={{ textDecoration: "none", color: "black" }} to="setting">Go to Setting</Link>
                <Link style={{ textDecoration: "none", color: "black" }} to="dashboard">Go to Dashboard</Link>
            </div>
            <hr />
            <Outlet></Outlet> */}
            <h1>hi this is a test from Content</h1>
        </div>
    )
}
