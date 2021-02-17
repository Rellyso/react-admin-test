import { Login } from 'react-admin'
import { useState, useEffect } from 'react'
import api from '../../api'

const MyLogin = () => {
    const [users, setUsers] = useState([])
    
    useEffect(async ()=> {
        const response = await api.get('/users')

        setUsers(response.data)

    },[])
    
    console.log(users)

    return (
        <Login />
    )
}

export default MyLogin;