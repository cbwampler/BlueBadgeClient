import React from 'react';
import { Table, Button, Input} from 'reactstrap';
import ReactDataGrid from 'react-data-grid'

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

    
const TestRun = (props) => {

const deleteTestcase = (testcase) => {
    fetch(`http://localhost:3500/testcase/delete/${testcase.id}`, {
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
                <td>{test.subcat1}</td>
                <td>{test.subcat2}</td>
                <td>{test.details}</td>
                <td>{test.expectation}</td>
                <td>{test.result}<Input style={style.field} type='select' name='result' placeholder='result'>
                    <option>Not Set</option>
                    <option>Passed</option>
                    <option>Failed</option>
                    <option>Not Run</option>
                    <option>On Hold</option>
                </Input></td>
                <td>{test.notes}</td>
                <td>
                    <Button size='sm' color='link' onClick={() => {props.editTestcase(test)}}>Edit</Button>
                    <Button size='sm' color="link" onClick={() => {deleteTestcase(test)}}>Delete</Button> 
                </td>
            </tr>
        )
    })
}
    
return(
    
<div>  
    <br />
<Table size="sm" style={style.base} striped responsive>
    <thead>
    <tr>
        <th width='2%'>#</th>
        <th width='5%'>Application Area</th>
        <th width='5%'>Category</th>
        <th width='5%'>SubCat1</th>
        <th width='5%'>SubCat2</th>
        <th width='25%'>Test Details</th>
        <th width='25%'>Expectation</th>
        <th width='5%' >Result</th>
        <th width='20%'>Notes</th>
        <th width='3%'></th>
    </tr>
    </thead>
    <tbody>
        {testcaseMapper()}
    </tbody>
</Table>
</div>
)
}
export default TestRun