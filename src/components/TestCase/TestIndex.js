import React, {useState, useEffect} from 'react'
import {Route, Link, Switch, BrowserRouter as Router} from 'react-router-dom'
import {Col, Row} from 'reactstrap'
import TestCaseCreate from './TestCaseCreate'
import TestList from './TestList'
import TestRun from './TestRun'
import Sitebar from '../Navbar/Navbar'

const TestIndex = (props) => {
document.body.style = 'background: #EFECF3';
const [tests, setTests] = useState([]);
const [testToGet, setTestToGet] = useState({})

const fetchTests = () => {
    fetch('http://localhost:3500/testcase/allcases', {
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
useEffect(() => {
    fetchTests(); 
}, [])


const fetchOneTest = (id) => {
    fetch(`http://localhost:3500/testcase/${id}`, {
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
<Row xs='3'style={{fontSize:'.8rem', backgroundColor: '#CFC7DC'}} >              
    <Col className='text-center' >
    <Link to="/TestCaseCreate">Create Test Cases</Link>
    </Col>
    <Col className='text-center'>
    <Link to="/TestList">List Test Cases</Link>
    </Col>
    <Col className='text-center'>
    <Link to="/TestRun">Run Test Cases</Link>
    </Col>
</Row>
<br />
<Switch>
    <Route exact path="/TestCaseCreate"><TestCaseCreate token={props.token} fetchTests={fetchTests} testToGet={fetchOneTest}/></Route>
    <Route exact path="/TestList"><TestList fetchTests={fetchTests} token={props.token} tests={tests}/></Route>
    <Route exact path="/TestRun"><TestRun fetchTests={fetchTests}  token={props.token} tests={tests} /></Route>
</Switch>
</Router> 
)
}

export default TestIndex