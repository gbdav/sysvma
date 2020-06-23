import React, { useState } from 'react'

const Login = () => {
    const [ user, setUser ] = useState('');
    const [ password, setPassword ] = useState('');
    return (
        <form onSubmit={ (e) => { e.preventDefault() } } >
            <input type="text" onChange={ ({ target }) => { setUser(target.value) } } className="form-control" />
            <input type="password" onChange={ ({ target }) => { setPassword(target.value) } } className="form-control" />
            { password }
            { user }
        </form>
    )
}

export default Login;