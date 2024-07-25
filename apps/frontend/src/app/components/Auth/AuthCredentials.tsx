import React, { MouseEventHandler, useContext } from 'react'
import { AuthContext, useAuthContext } from './AuthContext'
import { Button } from '@ems/common-ui'



const AuthCredentials = () => {
    const context = useAuthContext()
    const handleClick: MouseEventHandler<HTMLButtonElement>= () =>{
        context.toggle();
    }
  return (
    <div>
        <h3>
            AuthCredentials
            </h3>
            <p>is user logged? {context.isLogged ? 'yes': 'no'}</p>
            <Button onClick={ handleClick} label={'toggle auth'} />
    </div>
  )
}

export default AuthCredentials
