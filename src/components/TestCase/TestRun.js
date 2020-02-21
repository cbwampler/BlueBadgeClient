import React, {useEffect} from 'react';
import { Container, Table, Row, Col, Button, Input} from 'reactstrap'

const style = {
    result:{
        backgroundColor: 'green'
    },
    field:{
        marginTop: '0rem', 
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
            marginTop: '1.5rem',
            bsSize: "xs",
            height: '2rem',
            width: '10rem'
            },
    label:{ 
        marginBottom: '0rem',
        fontWeight: 'normal',
        fontSize:'0.8em', 
        fontFamily: `-apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Oxygen,Ubuntu, Cantarell, "Open Sans", "Helvetica Neue", sans-serif`,
    }
}

const TestRun = (props) => {
    
    useEffect(() => {
        props.fetchTests(); 
    }, [])


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
                    <option >Passed</option>
                    <option >Failed</option>
                    <option >Not Run</option>
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
    <label htmlFor='area' style={style.label}>Application Area</label>
    <Input style={style.field} type='select' name='select' id='selectMulti' placeholder='Area of Application'>
    <option>Not Set</option>
                <option>SharpenQ</option> 
                <option>End User</option> 
                <option>Admin</option> 
                <option>Developer</option>
                <option>Contacts</option>
                <option>People</option> 
                <option>SharpenDB</option> 
                <option>SharpenQ Vue</option> 
                <option>Logic/Action</option>
                <option>MicroServices</option>
                <option>Not Set</option>
                <option>Transcriptions</option> 
                <option>Recordings</option> >
    </Input>
    </Col>
    <Col xs>
    <label htmlFor='category' style={style.label}>Category</label>   
    <Input style={style.field} type='select' name='selectMulti' placeholder='Category'>
    <option>Not Set</option>
                <option>Inbound</option> 
                <option>Outbound</option> 
                <option>History</option> 
                <option>Auto Answer</option>
                <option>Header</option>
                <option>Tabs</option> 
                <option>End Interaction</option> 
                <option>SharpenDB</option> 
                <option>Auto Attendant</option>>
    </Input>
    </Col>
    <Col xs>
    <label htmlFor='subcat' style={style.label}>SubCategory</label>   
    <Input style={style.field} type='select' name='selectMulti' placeholder='subcat'>
        <option>Not Set</option>
        <option>Area1</option>
        <option>Area2</option>
    </Input>
    </Col>
    <Col xs>
    <label htmlFor='priority' style={style.label}>Priority</label>   
    <Input style={style.field} type='select' name='selectMulti' placeholder='Priority'>
        <option>Not Set</option>
        <option>Area1</option>
        <option>Area2</option>
    </Input>
    </Col>
    <Col xs>
    <label htmlFor='platform' style={style.label}>Platform</label>   
    <Input style={style.field} type='select' name='selectMulti' placeholder='Platform'>
        <option>Not Set</option>
        <option>Area1</option>
        <option>Area2</option>
    </Input>
    </Col>
    <Col xs>
    <label htmlFor='testtype' style={style.label}>Test Type</label>   
    <Input style={style.field} type='select' name='selectMulti' placeholder='testtype'>
        <option>Not Set</option>
        <option>Area1</option>
        <option>Area2</option>
    </Input>
    </Col>
    <Col xs>
    <label htmlFor='medium' style={style.label}>Interface</label>   
    <Input style={style.field} type='select' name='selectMulti' placeholder='medium'>
        <option>Not Set</option>
        <option>Area1</option>
        <option>Area2</option>
    </Input>
    </Col>
    <Col>  
        <Button style={style.button}>Filter Tests</Button>
    </Col>
</Row>
<br/>
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