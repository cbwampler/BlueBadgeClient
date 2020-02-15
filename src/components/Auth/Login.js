import React, {useState} from 'react'
import {Form, FormGroup, Label, Input, Button} from 'reactstrap'
import APIURL from '../../helpers/environment'

const Login = (props) => {
    const [username, setUsername] = useState('')
    const [password, setPassword] = useState('')

    const handleSubmit = (e) => {
        e.preventDefault()

        fetch(`${APIURL}/api/user/signin`, {
            method: 'POST',
            body: JSON.stringify(
                {
                    user: {
                        username: username,
                        password: password}
                    }),                   
                headers: new Headers({
                    'Content-Type': 'application/json'
                })
            }).then(response => response.json())
            .then(user => props.updateToken(user.sessionToken)
            )}

return(
    <div>
        <h1>Login</h1>
        <Form onSubmit={handleSubmit}>
        <FormGroup>
            <Label htmlFor='username'></Label>
            <Input onChange={(e) => setUsername(e.target.value)} type='email' placeholder='username' name='username' value={username} />
        </FormGroup>
        <FormGroup>
            <Label htmlFor='password'></Label>
            <Input onChange={(e) => setPassword(e.target.value)} type='password' placeholder= 'password' name='password' value={password}/>
        </FormGroup>
        <Button type='submit' style={{backgroundColor: "#624292"}}>Login</Button>
    </Form>
    </div>
)
}

export default Login