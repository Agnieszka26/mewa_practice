import React, { MouseEventHandler, useContext } from 'react'
import { AuthContext } from './AuthContext'
import { Button } from '@ems/common-ui'



const AuthCredentials = () => {
    const context = useContext(AuthContext);
    const handleClick: MouseEventHandler<HTMLButtonElement>= () =>{
        context.setIsLogged((value) => !value)
    }
  return (
    <div>
        <h3>
            AuthCredentials
            </h3>
            <p>is user logged? {context.isLoggedIn ? 'yes': 'no'}</p>
            <Button onClick={ handleClick} label={'toggle auth'} />
    </div>
  )
}

export default AuthCredentials
