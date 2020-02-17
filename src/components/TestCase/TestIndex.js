import React, {useState} from 'react'
import {Route, Link, Switch, BrowserRouter as Router} from 'react-router-dom'
import {Col, Row} from 'reactstrap'
import TestCaseCreate from './TestCaseCreate'
// import TestList from './TestList'
import TestRun from './TestRun'
import Sitebar from '../Navbar/Navbar'
import APIURL from '../../helpers/environment'

const TestIndex = (props) => {
document.body.style = 'background: #EFECF3';
const [tests, setTests] = useState([]);
const [testToGet, setTestToGet] = useState({})

const fetchTests = () => {
    fetch(`${APIURL}/testcase/allcases`, {
        method: 'GET',
        headers: new Headers ({
            'Content-Type':'application/json',
            'Authorization': props.token
        })
    })
    .then(res => res.json()) 
    .then(logData => {
        setTests(logData)
        console.log(logData)
    })
}

const fetchOneTest = (id) => {
    fetch(`${APIURL}/testcase/${id}`, {
        method: 'GET',
        headers: new Headers ({
            'Content-Type':'application/json',
            'Authorization': props.token
        })
    })
    .then(res => res.json()) 
    .then(logData => {
        setTestToGet(logData)
        console.log(logData)
    })
}

return(
<Router>
    <Sitebar clickLogout={props.clickLogout}/>
<Row sm='2'style={{fontSize:'.8rem', backgroundColor: '#CFC7DC'}} >              
    <Col className='text-center' >
    <Link to="/TestCaseCreate">Test Cases Details</Link>
    </Col>
    <Col className='text-center'>
    <Link to="/TestRun">Test Case List</Link>
    </Col>
</Row>
<br />
<Switch>
    <Route exact path="/TestCaseCreate"><TestCaseCreate token={props.token} fetchOneTest={fetchOneTest} testToGet={testToGet} /></Route>
    <Route exact path="/TestRun"><TestRun fetchTests={fetchTests}  token={props.token} tests={tests} /></Route>
</Switch>
</Router> 
)
}

export default TestIndex