import React, { useState, useEffect } from "react";
import {Button, Form, FormGroup,Label, Input,Modal,ModalHeader,ModalBody} from "reactstrap";
import APIURL from '../../helpers/environment'

const style = {
    button:{
        backgroundColor: '#624292', 
        marginRight: '1rem',
        bsSize: "xs",
        height: '2rem',
        width: '10rem',
        fontSize:'1em',
        padding: '0em', 
        fontFamily: `-apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Oxygen,Ubuntu, Cantarell, "Open Sans", "Helvetica Neue", sans-serif`,
    }
}

const SubmitTest = props => {
    const [showArea, setShowArea] = useState(props.testToGet.area)
    const [showCategory, setShowCategory] = useState(props.testToGet.category)
    const [showSubcat, setShowSubcat] = useState(props.testToGet.subcat)
    const [showExpectation, setShowExpectation] = useState(props.testToGet.expectation)
    const [showNotes, setShowNotes] = useState(props.testToGet.notes)
    const [showDetails, setShowDetails] = useState(props.testToGet.details)
    const [showResult, setShowResult] = useState("")
    const [showResultNotes, setShowResultNotes] = useState("")
    const [Key, setKey] = useState("id")

    const RunTestCase = (id) => {

        fetch(`${APIURL}/testcase/update/${props.testToGet.id}`, {
                method: 'PUT',
                body: JSON.stringify(
                    {
                        testcase: {
                            primaryKey: id,
                            area: showArea,
                            category: showCategory,
                            subcat: showSubcat,
                            details: showDetails,
                            expectation: showExpectation,
                            notes: showNotes,
                            details: showDetails,
                            result: showResult,
                            resultNotes: showResultNotes
                    }
                    }),
                headers: new Headers({
                    'Content-Type':'application/json',
                    'Authorization':props.token
                })
            }).then(res => {
            props.fetchTests()
            .then(props.executeOff())
            })
        }

return (
    <Modal isOpen={true}>
    <ModalHeader>Execute Test</ModalHeader>
    <ModalBody>
        <Form onSubmit={RunTestCase}>
        <FormGroup>
            <Label htmlFor="id">Test ID:</Label>
            <Input 
            type="text"
            name="key"
            value={showResultNotes}
            onChange={e => setKey(e.target.value)}
            />
        </FormGroup>
        <FormGroup>
            <Label htmlFor="result">Result:</Label>
                    <Input type= 'select' name='result' placeholder='result' value={showResult} onChange={(e) => setShowResult(e.target.value)}>
                        <option>Not Set</option>
                        <option>Passed</option> 
                        <option>Failed</option> 
                        <option>On Hold</option> 
                        <option>Not Run</option>
                    </Input>
        </FormGroup>
        <FormGroup>
            <Label htmlFor="resultNotes">Result Notes:</Label>
            <Input 
            type="textarea"
            name="resultNotes"
            value={showResultNotes}
            onChange={e => setShowResultNotes(e.target.value)}
            />
        </FormGroup>
        <div className="text-center">
        <Button style={style.button} type="submit">Submit Test</Button>
        <Button style={style.button} type="cancel">Cancel</Button>
        </div>

        </Form>
    </ModalBody>
    </Modal>
)}

export default SubmitTest;
