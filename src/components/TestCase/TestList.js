import React from 'react';
import { Row, Col, Table, Button, Input } from 'reactstrap';

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
        }
    }

const TestList = (props) => {

    const testcaseMapper = () => {    

    return props.tests.map((test, index) => {
        return(
            <tr key={index}>
                <th scope="row">{test.id}</th>
                <td>{test.area}</td>
                <td>{test.category}</td>
                <td>{test.subcat1}</td>
                <td>{test.subcat2}</td>
                <td>{test.details}</td>
                <td>{test.expectation}</td>
                <td>{test.notes}</td>
                <td> <Button size='sm' color='link'>Edit</Button> </td>
            </tr>
        )
    })
}

return (

<div>
    <div>
    <h1 className="centered">Test Cases</h1>
        
        <Row>
            <Col sm='2'>
            <Input style={style.field} type='select' name='Filter1' placeholder='Filter1' >
                <option>Not Set</option>
                <option>Area1</option>
                <option>Area2</option>
            </Input>
            </Col>
            <Col sm='2'>
            <Input style={style.field} type='select' name='Filter2' placeholder='Filter2'>
                <option>Not Set</option>
                <option>Area1</option>
                <option>Area2</option>
            </Input>
            </Col>
            <Col sm='2'>
            <Input style={style.field} type='select' name='Filter3' placeholder='Filter3'>
                <option>Not Set</option>
                <option>Area1</option>
                <option>Area2</option>
            </Input>
            </Col>
            <Col sm='2'>
            <Input style={style.field} type='select' name='Filter4' placeholder='Filter4'>
                <option>Not Set</option>
                <option>Area1</option>
                <option>Area2</option>
            </Input>
            </Col>
            <Col sm='2'>
            <Input style={style.field} type='select' name='Filter5' placeholder='Filter5'>
                <option>Not Set</option>
                <option>Area1</option>
                <option>Area2</option>
            </Input>
            </Col>
            <Col sm='2'>
            <Input style={style.field} type='select' name='Filter6' placeholder='Filter6'>
                <option>Not Set</option>
                <option>Area1</option>
                <option>Area2</option>
            </Input>
            </Col>
        </Row>
    </div>
    <br />
<Table size="sm" style={style.base} striped responsive>
    <thead>
    <tr>
        <th width='2%'>#</th>
        <th width='5%'>Application Area</th>
        <th width='5%'>Category</th>
        <th width='5%'>Subcat1</th>
        <th width='5%'>Subcat2</th>
        <th width='25%'>Test Details</th>
        <th width='25%'>Expectation</th>
        <th width='25%'>Notes</th>
        <th width='3%'></th>
    </tr>
    </thead>
    <tbody>
        {testcaseMapper()}
    </tbody>
</Table>
</div>
);
}

export default TestList