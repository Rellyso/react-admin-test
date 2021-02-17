import { Login } from 'react-admin'
import { useContext } from 'react'

import { Context } from '../../Context/AuthContext'


const MyLogin = () => {
    const { authenticated } = useContext(Context)

    console.debug('Login', authenticated)

    return (
        <Login  />
    )
}

export default MyLogin;