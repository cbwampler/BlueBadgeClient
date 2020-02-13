import React, {useState} from 'react'
import {Form, FormGroup, Label, Input, Button} from 'reactstrap'

const Signup = (props) => {
const[username, setUsername] = useState('')
const[password, setPassword] = useState('')

const handleSubmit = (event) => {
    event.preventDefault();

    fetch('http://localhost:3500/api/user/createuser', {
    method: 'POST',
    body: JSON.stringify(
        {
            user:{
                username:username, 
                password: password}
            }),
    headers: new Headers({
        'Content-Type': 'application/json'
    })
    }).then(response => response.json())
    .then(user => props.updateToken(user.sessionToken)
)}

return (
    <div>
        <h1>Sign Up</h1>
        <Form onSubmit={handleSubmit}>
        <FormGroup>
            <Label htmlFor='username'>Name</Label>
            <Input 
            onChange={(e) => setUsername(e.target.value)}
            type='email' 
            placeholder='username' 
            name='username' 
            value={username} />
        </FormGroup>
        <FormGroup>
            <Label htmlFor='password'></Label>
            <Input onChange={(e) => setPassword(e.target.value)}
            type='password' 
            placeholder= 'password' 
            name='password' 
            value={password}
            minLength="5"
            required />
        </FormGroup>
        <Button type='submit' style={{backgroundColor: '#624292'}}>Create Account</Button>
    </Form>
    </div>  
    )
}

export default Signup