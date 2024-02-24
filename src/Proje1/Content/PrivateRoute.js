import React from 'react'
import { Navigate } from 'react-router-dom'
import { Login } from './../../utils'
export default function PrivateRoute({ children }) {
    let isLogin = Login('mohammad')
    return (
        <div>
            {isLogin ? (
                 children 
                ) : (
                <Navigate to='/'></Navigate>
            )}
        </div>
    )
}