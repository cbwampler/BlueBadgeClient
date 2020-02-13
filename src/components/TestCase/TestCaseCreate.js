import React, {useState} from 'react'
import {Container, Input, InputGroup, InputGroupAddon, CustomInput, CardBody, Button, Col, Row, Card, CardTitle, Pagination, PaginationItem, PaginationLink} from 'reactstrap'

const style = {
    card:{
        padding:'.5rem', 
        fontSize:'0.8em', 
        height:'13rem',
        backgroundColor: '#EFECF3'
        }, 
    base:{
        backgroundColor: '#EFECF3', 
        padding:'1rem',
        fontWeight: 'lighter', 
        fontSize:'0.8em',
        fontFamily: `-apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Oxygen,Ubuntu, Cantarell, "Open Sans", "Helvetica Neue", sans-serif`,
    }, 
    field:{
        padding:'.5rem', 
        fontWeight: 'lighter',
        bsSize: "sm"
        }, 
    TextArea:{
        marginTop: '.5rem',
        padding:'.5rem', 
        fontWeight: 'lighter',
        bsSize: "sm"
        }, 
    button:{
        bsSize: "sm",
        backgroundColor: '#624292', 
        marginRight: '1rem'
        },
    label:{ 
        marginTop:'.5rem',
        marginBottom: '0rem',
        fontColor:'black'
    }
    }

const TestCaseCreate = (props) => {  
    const [area, setArea] = useState('')
    const [category, setCategory] = useState('')
    const [subcat1, setSubcat1] = useState('')
    const [subcat2, setSubcat2] = useState('')
    const [status, setStatus] = useState('')
    const [expectation, setExpectation] = useState('')
    const [notes, setNotes] = useState('')
    const [details, setDetails] = useState('')
    const [medium, setMedium] = useState('')
    const [priority, setPriority] = useState('')
    const [platform, setPlatform] = useState('')
    const [testtype, setTesttype] = useState('')
    const [jiraticket,setJiraticket] = useState('')
    const [searchValue,setSearchValue] = useState('')

const createTestCase = () => {
    fetch('http://localhost:3500/testcase/create', {
            method: 'POST',
            body: JSON.stringify(
                {
                    testcase: {
                        area: area,
                        category: category,
                        subcat1: subcat1,
                        subcat2: subcat2,
                        details: details,
                        expectation:expectation,
                        notes: notes,
                        status: status,
                        medium:medium,
                        platform:platform,
                        testtype:testtype,
                        priority:priority
                }
                }),
            headers: new Headers({
                'Content-Type':'application/json',
                'Authorization':props.token
            })
        }).then(res => res.json())
        .then(logData => {
            console.log(logData)
            setArea('')
            setCategory('')
            setSubcat1('')
            setSubcat2('')
            setStatus('')
            setExpectation('')
            setNotes('')
            setDetails('')
            setMedium('')
            setPriority('')
            setPlatform('')
            setTesttype('')
        })
    }




return(
<div style={style.base}>
<Container fluid={true}>
    <h3 className='text-center'>Test Case Details</h3>
    <Row>
        
        <Col sm='3'> 
            <InputGroup>
                <InputGroupAddon addonType="append">
                    <Button onClick={()=>{props.testToGet(searchValue)} }
                    style={{backgroundColor: '#624292', height: '2.3rem', marginTop: '.5rem'}}> Submit</Button>
                </InputGroupAddon>
                <Input style={style.TextArea} value={searchValue} onChange={(e)=>setSearchValue(e.target.value)} placeholder='Search for testcase'/>
            </InputGroup>
            <label htmlFor='area' style={style.label}>Application Area</label>
            <Input style={style.field} type='select' name='area' placeholder='Application Area' value={area} onChange={(e) => setArea(e.target.value)}>
                {area.length === 0 && <option> No application areas added yet</option>}
                {/* {area.length > 0 && <option>Select an Application Area</option>}
                {area.map((area, i) => <option key={1}>{area}</option>)} */}
            </Input>
            <label htmlFor='category' style={style.label}>Category</label>
            <Input  style={style.field} type='select' name='category' placeholder= 'Category' value={category} onChange={(e) => setCategory(e.target.value)}>
                <option>Not Set</option>
                <option>category1</option>
                <option>category2</option>               
            </Input> 
            <label htmlFor='subcat1' style={style.label}>SubCategory 1</label>
            <Input style={style.field} type='select' name='subcat1' placeholder='Subcategory1' value={subcat1} onChange={(e) => setSubcat1(e.target.value)}>
                <option>Not Set</option>
                <option>subcat1-a</option> 
                <option>subcat1-b</option> 
            </Input>
            <label htmlFor='subcat2' style={style.label}>SubCategory 2</label>
            <Input style={style.field} type='select' name='subcat2' placeholder='Subcategory2' value={subcat2} onChange={(e) => setSubcat2(e.target.value)} >
                <option>Not Set</option>
                <option>subcat2-a</option> 
                <option>subcat2-b</option> 
            </Input>
        </Col>

        <Col sm='9'>
            <Input style={style.TextArea} type='textarea' placeholder = 'Test Details' value={details} onChange={(e) => setDetails(e.target.value)} /> 
            <Input style={style.TextArea} type='textarea' name='Expectation' placeholder = 'Expectation' value={expectation} onChange={(e) => setExpectation(e.target.value)} />
            <Input style={style.TextArea} type='textarea' name='Notes' placeholder = 'Additional Notes'value={notes} onChange={(e) => setNotes(e.target.value)} />    
            <Row>  
                <Col sm='2'>
                <label htmlFor='JIRA' style={style.label}>Relates to</label>
                    <Input style={style.TextArea} type='text' name='JIRA Ticket' placeholder='JIRA Ticket'value={jiraticket} onChange={(e) => setJiraticket(e.target.value)}/>   
                </Col>
                <Col sm='2'>
                <label htmlFor='status' style={style.label}>Status</label>
                    <Input style={style.TextArea} type= 'select' name='status' placeholder='Status' value={status} onChange={(e) => setStatus(e.target.value)}>
                        <option>Not Set</option>
                        <option>Draft</option> 
                        <option>Active</option> 
                        <option>Obsolete</option> 
                        <option>Rework</option>
                    </Input>
                </Col>
                <Col sm='7' /> 
            </Row>
        </Col>
    </Row> 
</Container>

<br />
<Container fluid={true}>
<Row>
    <Col> 
        <Card style={style.card}>
            <CardTitle className='text-center'><h6>INTERFACE</h6></CardTitle>
            <CardBody>
                <Row>
                    <Col>
                        <CustomInput type="switch" id="deskphone" name="DeskPhone" label="Desk Phone"/>
                        <CustomInput type="switch" id="sharpenq" name="sharpenq" label="Sharpen Q" />
                    </Col>
                    <Col>
                        <CustomInput type="switch" id="connect" name="connect" label="Connect Phone" />
                    </Col>
                </Row>
            </CardBody>
        </Card>
    </Col>

    <Col sm='3'>
        <Card style={style.card}>
            <CardTitle className='text-center'><h6>PLATFORM</h6></CardTitle>
            <CardBody>
                <Row>
                    <Col>
                        <CustomInput type="switch" id="chrome" name="chrome" label="Chrome" />
                        <CustomInput type="switch" id="firefox" name="firefox" label="FireFox" />
                        <CustomInput type="switch" id="CTI:SN" name="CTI:SN" label="CTI: ServiceNow" />
                        <CustomInput type="switch" id="CTI:ZD" name="CTI:ZD" label="CTI: ZenDesk" />       
                    </Col>
                    <Col>
                        <CustomInput type="switch" id="CTI:SFDC" name="CTI:SFDC" label="CTI: Salesforce" />
                        <CustomInput type="switch" id="android" name="android" label="Android Mobile" />
                        <CustomInput type="switch" id="IoS" name="Ios" label="IoS Mobile" />
                        <CustomInput type="switch" id="connect" name="connect" label="Connect" />
                    </Col>
                </Row>
            </CardBody>
        </Card>
        </Col>

    <Col sm='3'>
        <Card style={style.card}>
            <CardTitle className='text-center'><h6>PRIORITY</h6></CardTitle>
            <CardBody>
                <Row>
                    <Col>
                        <CustomInput type="switch" id="quick" name="quick" label="Quick" />
                        <CustomInput type="switch" id="full" name="full" label="Full" />
                    </Col>
                    <Col>
                        <CustomInput type="switch" id="regression" name="regression" label="Regression" />
                        <CustomInput type="switch" id="automated" name="automated" label="Automated" />
                    </Col>
                </Row>
            </CardBody>
        </Card>
    </Col>

    <Col sm='3'>
        <Card style={style.card}>
            <CardTitle className='text-center'><h6>TEST TYPE</h6></CardTitle>  
            <CardBody>
                <Row>
                    <Col>
                        <CustomInput type="switch" id="inboundcall" name="inboundcall" label="Inbound Call" />
                        <CustomInput type="switch" id="chat" name="chat" label="Chat" />
                        <CustomInput type="switch" id="email" name="email" label="Email" />
                        <CustomInput type="switch" id="tweet" name="tweet" label="Tweet" />
                        <CustomInput type="switch" id="tweetdm" name="tweetdm" label="Tweet DM" />
                    </Col>
                    <Col>                     
                        <CustomInput type="switch" id="facebook" name="facebook" label="Facebook" />
                        <CustomInput type="switch" id="SMS" name="SMS" label="SMS" />
                        <CustomInput type="switch" id="casein" name="casein" label="CaseIn" />
                        <CustomInput type="switch" id="voicemail" name="voicemail" label="Voicemail" />
                        <CustomInput type="switch" id="insights" name="insights" label="Insights" />
                    </Col>
                </Row>
            </CardBody>
        </Card>
    </Col> 
</Row>
<br />
<Row className="form-row text-center">
    <Col>
        <PaginationLink previous >Prev </PaginationLink>
        <PaginationLink next>Next</PaginationLink>
        <Button></Button>
        <Button style={style.button} onClick={createTestCase} >Save</Button>
        <Button style={style.button}>Cancel</Button>
    </Col> 
</Row>
</Container>
</div>
)}

export default TestCaseCreate