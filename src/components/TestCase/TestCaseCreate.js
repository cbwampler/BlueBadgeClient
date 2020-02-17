import React, {useState, useEffect} from 'react'
import {Container, Input, InputGroup, InputGroupAddon, CustomInput, CardBody, Button, Col, Row, Card, CardTitle} from 'reactstrap'
import APIURL from '../../helpers/environment'

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
        bsSize: "sm",
        fontFamily: `-apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Oxygen,Ubuntu, Cantarell, "Open Sans", "Helvetica Neue", sans-serif`,
        }, 
    button:{
        bsSize: "sm",
        width: '10rem',
        backgroundColor: '#624292', 
        marginRight: '1rem'
        },
    label:{ 
        marginTop:'.5rem',
        marginBottom: '0rem',
        fontWeight: 'normal',
        fontFamily: `-apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Oxygen,Ubuntu, Cantarell, "Open Sans", "Helvetica Neue", sans-serif`,
    }
    }

const TestCaseCreate = (props) => {  
    const [area, setArea] = useState('')
    const [category, setCategory] = useState('')
    const [subcat, setSubcat] = useState('')
    const [status, setStatus] = useState('')
    const [expectation, setExpectation] = useState('')
    const [notes, setNotes] = useState('')
    const [details, setDetails] = useState('')
    const [searchValue,setSearchValue] = useState('')
    const [buttontext, setButtontext] = useState('Save')
    const [deskphone, setDeskphone] = useState('false')
    const [sharpenq, setSharpenq] = useState('false')
    const [connectphone, setConnectphone] = useState('false')
    const [chrome, setChrome] = useState('false')
    const [firefox, setFirefox] = useState('false')
    const [ctisn, setCtisn] = useState('false')
    const [ctizd, setCtizd] = useState('false')
    const [ctisfdc, setCtisfdc] = useState('false')
    const [android, setAndroid] = useState('false')
    const [ios, setIos] = useState('false')
    const [connect, setConnect] = useState('false')
    const [quick, setQuick] = useState('false')
    const [full, setFull] = useState('false')
    const [regression, setRegression] = useState('false')
    const [automated, setAutomated] = useState('false')
    const [inboundcall, setInboundcall] = useState('false')
    const [chat, setChat] = useState('false')
    const [email, setEmail] = useState('false')
    const [tweet, setTweet] = useState('false')
    const [tweetdm, setTweetdm] = useState('false')
    const [facebook, setFacebook] = useState('false')
    const [sms, setSms] = useState('false')
    const [casein, setCasein] = useState('false')
    const [voicemail, setVoicemail] = useState('false')
    const [insights, setInsights] = useState('false')
    const [isChecked, setIsChecked] = useState(false)


    useEffect(() => {
        setDetails(props.testToGet.details);
        setArea(props.testToGet.area)
        setCategory(props.testToGet.category)
        setSubcat(props.testToGet.subcat)
        setStatus(props.testToGet.status)
        setExpectation(props.testToGet.expectation)
        setNotes(props.testToGet.notes)
        setDeskphone(props.testToGet.deskphone)
        setSharpenq(props.testToGet.sharpenq)
        setConnectphone(props.testToGet.connectphone)
        setChrome(props.testToGet.chrome)
        setFirefox(props.testToGet.firefox)
        setCtisn(props.testToGet.citsn)
        setCtizd(props.testToGet.ctizd)
        setCtisfdc(props.testToGet.ctisfdc)
        setAndroid(props.testToGet.android)
        setIos(props.testToGet.ios)
        setConnect(props.testToGet.connect)
        setQuick(props.testToGet.quick)
        setFull(props.testToGet.full)
        setRegression(props.testToGet.regression)
        setAutomated(props.testToGet.automated)
        setInboundcall(props.testToGet.inboundcall)
        setChat(props.testToGet.chat)
        setEmail(props.testToGet.email)
        setTweet(props.testToGet.tweet)
        setTweetdm(props.testToGet.tweetdm)
        setFacebook(props.testToGet.facebook)
        setSms(props.testToGet.sms)
        setCasein(props.testToGet.casein)
        setVoicemail(props.testToGet.voicemail)
        setInsights(props.testToGet.insights)
        setIsChecked(props.testToGet.isChecked)
    }, [props.testToGet]
    )

    const clearData =() => {
        setArea('')
        setCategory('')
        setSubcat('')
        setStatus('')
        setExpectation('')
        setNotes('')
        setDetails('')
        setSearchValue('')
        setDeskphone('false')
        setSharpenq('false')
        setConnectphone('false')
        setChrome('false')
        setFirefox('false')
        setCtisn('false')
        setCtizd('false')
        setCtisfdc('false')
        setAndroid('false')
        setIos('false')
        setConnect('false')
        setQuick('false')
        setFull('false')
        setRegression('false')
        setAutomated('false')
        setInboundcall('false')
        setChat('false')
        setEmail('false')
        setTweet('false')
        setTweetdm('false')
        setFacebook('false')
        setSms('false')
        setCasein('false')
        setVoicemail('false')
        setInsights('false')        
        setButtontext('Save')
        setIsChecked(false)
    }

const createTestCase = () => {
    fetch(`${APIURL}/testcase/create`, {
            method: 'POST',
            body: JSON.stringify(
                {
                    testcase: {
                        area: area,
                        category: category,
                        subcat: subcat,
                        details: details,
                        expectation:expectation,
                        notes: notes,
                        status: status,
                        deskphone: deskphone,
                        sharpenq: sharpenq,
                        connectphone: connectphone,
                        chrome: chrome,
                        firefox: firefox,
                        ctisn: ctisn,
                        ctizd: ctizd,
                        ctisfdc: ctisfdc,
                        android: android,
                        ios: ios,
                        connect: connect,
                        quick: quick,
                        full: full,
                        regression: regression,
                        automated: automated,
                        inboundcall: inboundcall,
                        chat: chat,
                        email: email,
                        tweet: tweet,
                        tweetdm: tweetdm,
                        facebook: facebook,
                        sms: sms,
                        casein: casein,
                        voicemail: voicemail,
                        insights: insights
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
            setSubcat('')
            setStatus('')
            setExpectation('')
            setNotes('')
            setDetails('')
            setDeskphone('false')
            setSharpenq('false')
            setConnectphone('false')
            setChrome('false')
            setFirefox('false')
            setCtisn('false')
            setCtizd('false')
            setCtisfdc('false')
            setAndroid('false')
            setIos('false')
            setConnect('false')
            setQuick('false')
            setFull('false')
            setRegression('false')
            setAutomated('false')
            setInboundcall('false')
            setChat('false')
            setEmail('false')
            setTweet('false')
            setTweetdm('false')
            setFacebook('false')
            setSms('false')
            setCasein('false')
            setVoicemail('false')
            setInsights('false') 
            setIsChecked(false)       
        })
    }

    const EditTestCase = (id) => {
        fetch(`${APIURL}/testcase/update/${id}`, {
                method: 'PUT',
                body: JSON.stringify(
                    {
                        testcase: {
                            area: area,
                            category: category,
                            subcat: subcat,
                            details: details,
                            expectation: expectation,
                            notes: notes,
                            status: status,
                            deskphone: deskphone,
                            sharpenq: sharpenq,
                            connectphone: connectphone,
                            chrome: chrome,
                            firefox: firefox,
                            ctisn: ctisn,
                            ctizd: ctizd,
                            ctisfdc: ctisfdc,
                            android: android,
                            ios: ios,
                            connect: connect,
                            quick: quick,
                            full: full,
                            regression: regression,
                            automated: automated,
                            inboundcall: inboundcall,
                            chat: chat,
                            email: email,
                            tweet: tweet,
                            tweetdm: tweetdm,
                            facebook: facebook,
                            sms: sms,
                            casein: casein,
                            voicemail: voicemail,
                            insights: insights
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
                setSubcat('')
                setStatus('')
                setExpectation('')
                setNotes('')
                setDetails('')
                setDeskphone('false')
                setSharpenq('false')
                setConnectphone('false')
                setChrome('false')
                setFirefox('false')
                setCtisn('false')
                setCtizd('false')
                setCtisfdc('false')
                setAndroid('false')
                setIos('false')
                setConnect('false')
                setQuick('false')
                setFull('false')
                setRegression('false')
                setAutomated('false')
                setInboundcall('false')
                setChat('false')
                setEmail('false')
                setTweet('false')
                setTweetdm('false')
                setFacebook('false')
                setSms('false')
                setCasein('false')
                setVoicemail('false')
                setInsights('false')        
                setButtontext('Save')
                setSearchValue('')
                setIsChecked(false)
            })
        }

const deleteTestcase = (id) => {
    fetch(`${APIURL}/testcase/delete/${id}`, {
        method: 'DELETE',
        headers: new Headers({
            'Content-Type': 'application/json',
            'Authorization': props.token
        })
    })
    .then(logData => {
        console.log(logData)
        setArea('')
        setCategory('')
        setSubcat('')
        setStatus('')
        setExpectation('')
        setNotes('')
        setDetails('')
        setDeskphone('false')
        setSharpenq('false')
        setConnectphone('false')
        setChrome('false')
        setFirefox('false')
        setCtisn('false')
        setCtizd('false')
        setCtisfdc('false')
        setAndroid('false')
        setIos('false')
        setConnect('false')
        setQuick('false')
        setFull('false')
        setRegression('false')
        setAutomated('false')
        setInboundcall('false')
        setChat('false')
        setEmail('false')
        setTweet('false')
        setTweetdm('false')
        setFacebook('false')
        setSms('false')
        setCasein('false')
        setVoicemail('false')
        setInsights('false')        
        setButtontext('Save')
        setSearchValue('')
        setIsChecked(false)
    })
}

const handleSave = () => {
        if (buttontext === 'Save'){
            return createTestCase();      
        } else {
            return EditTestCase(searchValue);}    
}

return(
<div style={style.base}>
<Container fluid={true}>
    <h3 className='text-center'>Test Case Details</h3>
    <Row> 
        <Col sm='3'> 
            <label htmlFor='searchArea' style={style.label}>Search for a Test Case to Edit</label>
            <InputGroup>
                <InputGroupAddon addonType="append">
                    <Button onClick={()=>{props.fetchOneTest(searchValue)
                    setButtontext('Edit')
                } }
                    style={{backgroundColor: '#624292', height: '2.3rem'}}> Submit</Button>
                </InputGroupAddon>
                <Input style={style.field} type='text' value={searchValue} onChange={(e)=>setSearchValue(e.target.value)} placeholder='Search for testcase by ID'/>
            </InputGroup>
            <label htmlFor='area' style={style.label}>Application Area</label>
            <Input style={style.field} type='select' name='area' placeholder='Application Area' value={area} onChange={(e) => setArea(e.target.value)}>
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
            <label htmlFor='category' style={style.label}>Category</label>
            <Input  style={style.field} type='select' name='category' placeholder= 'Category' value={category} onChange={(e) => setCategory(e.target.value)}>
                <option>Not Set</option>
                <option>Inbound</option> 
                <option>Outbound</option> 
                <option>History</option> 
                <option>Auto Answer</option>
                <option>Header</option>
                <option>Tabs</option> 
                <option>End Interaction</option> 
                <option>SharpenDB</option> 
                <option>Auto Attendant</option>
            </Input> 
                <label htmlFor='subcat' style={style.label}>SubCategory</label>
            <Input style={style.field} type='select' name='subcat' placeholder='Subcategory1' value={subcat} onChange={(e) => setSubcat(e.target.value)}>
                <option>Not Set</option>
                <option>One</option> 
                <option>Two</option> 
                <option>Three</option> 
                <option>Four</option>
            </Input>
            <Row>  
                <Col>
                <label htmlFor='status' style={style.label}>Status</label>
                    <Input style={style.field} type= 'select' name='status' placeholder='Status' value={status} onChange={(e) => setStatus(e.target.value)}>
                        <option>Not Set</option>
                        <option>Draft</option> 
                        <option>Active</option> 
                        <option>Obsolete</option> 
                        <option>Rework</option>
                    </Input>
                </Col>
            </Row>
        </Col>
        <Col sm='9'>
        <label htmlFor='details' style={style.label}>Test Details</label>
            <Input style={style.field} type='textarea' placeholder = 'Test Details' value={details} onChange={(e) => setDetails(e.target.value)} /> 
        <label htmlFor='expectation' style={style.label}>Expected Behavior</label>
            <Input style={style.field} type='textarea' name='Expectation' placeholder = 'Expectation' value={expectation} onChange={(e) => setExpectation(e.target.value)} />
        <label htmlFor='notes' style={style.label}>Additional Notes</label>
            <Input style={style.field} type='textarea' name='Notes' placeholder = 'Additional Notes'value={notes} onChange={(e) => setNotes(e.target.value)} />    
        </Col>
    </Row> 
</Container>
<br />
<br />
<Container fluid={true}>
<Row>
    <Col> 
        <Card style={style.card}>
            <CardTitle className='text-center'><h6>INTERFACE</h6></CardTitle>
            <CardBody>
                <Row>
                    <Col>
                        <CustomInput type="switch" className="custom-switch" id="deskphone" name="deskphone" label="Desk Phone" onChange={(e) => setSharpenq(e.target.checked)} />
                        <CustomInput type="switch" id="sharpenq" name="sharpenq" label="Sharpen Q" value={sharpenq} onChange={(e) => setSharpenq(e.target.checked)} />
                    </Col>
                    <Col>
                        <CustomInput type="switch" id="connectphone" name="connectPhone" label="Connect Phone" value={connectphone} onChange={(e) => setConnectphone(e.target.checked)}  />
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
                        <CustomInput type="switch" id="chrome" name="chrome" label="Chrome" value={chrome} onChange={(e) => setChrome(e.target.checked)} />
                        <CustomInput type="switch" id="firefox" name="firefox" label="FireFox" value={firefox} onChange={(e) => setFirefox(e.target.checked)}/>
                        <CustomInput type="switch" id="ctisn" name="ctisn" label="CTI: ServiceNow" value={ctisn} onChange={(e) => setCtisn(e.target.checked)} />
                        <CustomInput type="switch" id="ctizd" name="ctizd" label="CTI: ZenDesk" value={ctizd} onChange={(e) => setCtizd(e.target.checked)}/>       
                    </Col>
                    <Col>
                        <CustomInput type="switch" id="ctisfdc" name="ctisfdc" label="CTI: Salesforce" value={ctisfdc} onChange={(e) => setCtisfdc(e.target.checked)}/>
                        <CustomInput type="switch" id="android" name="android" label="Android Mobile" value={android} onChange={(e) => setAndroid(e.target.checked)}/>
                        <CustomInput type="switch" id="ios" name="ios" label="IoS Mobile" value={ios} onChange={(e) => setIos(e.target.checked)}/>
                        <CustomInput type="switch" id="connect" name="connect" label="Connect Desktop" value={connect} onChange={(e) => setConnect(e.target.checked)}/>
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
                        <CustomInput type="switch" id="quick" name="quick" label="Quick" value={quick} onChange={(e) => setQuick(e.target.checked)}/>
                        <CustomInput type="switch" id="full" name="full" label="Full" value={full} onChange={(e) => setFull(e.target.checked)} />
                    </Col>
                    <Col>
                        <CustomInput type="switch" id="regression" name="regression" label="Regression" value={regression} onChange={(e) => setRegression(e.target.checked)}/>
                        <CustomInput type="switch" id="automated" name="automated" label="Automated" value={automated} onChange={(e) => setAutomated(e.target.checked)}/>
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
                        <CustomInput type="switch" id="inboundcall" name="inboundcall" label="Inbound Call" value={inboundcall} onChange={(e) => setInboundcall(e.target.checked)} />
                        <CustomInput type="switch" id="chat" name="chat" label="Chat" value={chat} onChange={(e) => setChat(e.target.checked)}/>
                        <CustomInput type="switch" id="email" name="email" label="Email" value={email} onChange={(e) => setEmail(e.target.checked)}/>
                        <CustomInput type="switch" id="tweet" name="tweet" label="Tweet" value={tweet} onChange={(e) => setTweet(e.target.checked)}/>
                        <CustomInput type="switch" id="tweetdm" name="tweetdm" label="Tweet DM" value={tweetdm} onChange={(e) => setTweetdm(e.target.checked)}/>
                    </Col>
                    <Col>                     
                        <CustomInput type="switch" id="facebook" name="facebook" label="Facebook" value={facebook} onChange={(e) => setFacebook(e.target.checked)}/>
                        <CustomInput type="switch" id="sms" name="sms" label="SMS" value={sms} onChange={(e) => setSms(e.target.checked)}/>
                        <CustomInput type="switch" id="casein" name="casein" label="CaseIn" value={casein} onChange={(e) => setCasein(e.target.checked)}/>
                        <CustomInput type="switch" id="voicemail" name="voicemail" label="Voicemail" value={voicemail} onChange={(e) => setVoicemail(e.target.checked)}/>
                        <CustomInput type="switch" id="insights" name="insights" label="Insights" value={insights} onChange={(e) => setInsights(e.target.checked)}/>
                    </Col>
                </Row>
            </CardBody>
        </Card>
    </Col> 
</Row>
<br />
<Row className="form-row text-center">
    <Col>
        <Button style={style.button} onClick={() => {handleSave()}}>{buttontext}</Button>
        <Button style={style.button} onClick={() => window.location.href='/'}>Cancel</Button>
        <Button style={style.button} onClick={clearData} >Clear Form</Button>
        <Button style={style.button} onClick={() => {deleteTestcase(searchValue)}}>Delete</Button> 
    </Col> 
</Row>
</Container>
</div>
)}

export default TestCaseCreate