import React, {useEffect} from 'react';
import { Container, Table, Row, Col, Button, Input} from 'reactstrap'
import APIURL from '../../helpers/environment'

const style = {
    field:{
        marginTop: '.5rem', 
        padding:'.5rem', 
        fontWeight: 'lighter',
        bsSize: "xs",
        fontSize: '.8rem'
        },
        base:{
            fontSize: ".8rem"
        },
        button:{
            backgroundColor: '#624292', 
            marginRight: '1rem',
            marginTop: '.5rem',
            bsSize: "xs",
            height: '2rem',
            width: '10rem'
            },
    }

    
const TestRun = (props) => {

    useEffect(() => {
        props.fetchTests(); 
    }, [])

const deleteTestcase = (testcase) => {
    fetch(`${APIURL}/testcase/delete/${testcase.id}`, {
        method: 'DELETE',
        headers: new Headers({
            'Content-Type': 'application/json',
            'Authorization': props.token
        })
    })
.then(() => props.fetchTests())
}

const testcaseMapper = () => {

    return props.tests.map((test, index) => {
        return(      
            <tr key={index}>
                <th scope="row">{test.id}</th>
                <td>{test.area}</td>
                <td>{test.category}</td>
                <td>{test.subcat}</td>
                <td>{test.details}</td>
                <td>{test.expectation}</td>
                <td>{test.notes}</td>
                <td>{test.result}<Input style={style.field} type='select' name='result' placeholder='result'>
                    <option>Not Set</option>
                    <option>Passed</option>
                    <option>Failed</option>
                    <option>Not Run</option>
                    <option>On Hold</option>
                </Input></td>
                <td>{test.resultNotes}<Input style={style.field} type="textarea" name='resultNotes' placeholder='Testing Notes'></Input></td>
            </tr>
        )
    })
}
    
return(
    
<div>
<Container fluid={true}>
<h2 className="text-center">Test Case List</h2>
<Row className="form-row text-center">
    <Col xs>
    <Input style={style.field} type='select' name='Filter1' placeholder='Area of Application' >
        <option>Not Set</option>
        <option>Area1</option>
        <option>Area2</option>
    </Input>
    </Col>
    <Col xs>
    <Input style={style.field} type='select' name='Filter2' placeholder='Category'>
        <option>Not Set</option>
        <option>Area1</option>
        <option>Area2</option>
    </Input>
    </Col>
    <Col xs>
    <Input style={style.field} type='select' name='Filter3' placeholder='Interface'>
        <option>Not Set</option>
        <option>Area1</option>
        <option>Area2</option>
    </Input>
    </Col>
    <Col xs>
    <Input style={style.field} type='select' name='Filter4' placeholder='Priority'>
        <option>Not Set</option>
        <option>Area1</option>
        <option>Area2</option>
    </Input>
    </Col>
    <Col xs>
    <Input style={style.field} type='select' name='Filter5' placeholder='Platform'>
        <option>Not Set</option>
        <option>Area1</option>
        <option>Area2</option>
    </Input>
    </Col>
    <Col xs>
    <Input style={style.field} type='select' name='Filter6' placeholder='TestType'>
        <option>Not Set</option>
        <option>Area1</option>
        <option>Area2</option>
    </Input>
    </Col>
    <Col xs>
    <Input style={style.field} type='select' name='Filter6' placeholder='subcat'>
        <option>Not Set</option>
        <option>Area1</option>
        <option>Area2</option>
    </Input>
    </Col>
    <Col>
        <Button style={style.button}>Filter Tests</Button>
    </Col>
</Row>

<Table size="sm" style={style.base} striped responsive>
    <thead>
    <tr>
        <th width='1%'>#</th>
        <th width='5%'>Application Area</th>
        <th width='5%'>Category</th>
        <th width='4%'>SubCat</th>
        <th width='20%'>Test Details</th>
        <th width='20%'>Expectation</th>
        <th width='20%'>Notes</th>
        <th width='5%' >Result</th>
        <th width='20%'>Testing Notes</th>
    </tr>
    </thead>
    <tbody>
        {testcaseMapper()}
    </tbody>
</Table>

<Row className="form-row text-center">
<Col>
    <Button style={style.button}>Save Results</Button>
    <Button style={style.button}>Button2</Button>
    <Button style={style.button}>Button3</Button>
</Col> 
</Row>
</Container>
</div>
)
}
export default TestRun