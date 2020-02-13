import React, {useState} from 'react'
import Signup from './Signup'
import Login from './Login'
import {TabContent, TabPane, Nav, NavItem, NavLink, Card, Row, Col} from 'reactstrap'
import classnames from 'classnames'

const style = {wrapper:{
height: '100vh',
width: '100%',
display: 'flex',
flexDirection: 'column',
justifyContent: 'center',
alignItems: 'center',
backgroundColor: '#EFECF3',
padding: '20px 40px'
}}

const Auth =(props) => {
    const [activeTab, setActiveTab] = useState('1')

    const toggle = tab => {
        if(activeTab !== tab) setActiveTab(tab)
    }

    return (
        <div style={style.wrapper}>
            <Nav tabs>
                <NavItem>
                    <NavLink
                        className={classnames({active: activeTab === '1'})}
                        onClick={() => {toggle('1');}}
                    >
                        Login
                    </NavLink>
                </NavItem>
                <NavItem>
                    <NavLink
                        className={classnames({active: activeTab === '2'})}
                        onClick={() => {toggle('2');}}
                    >
                        SignUp
                    </NavLink>
                </NavItem>
            </Nav >
            <TabContent activeTab={activeTab} style={{justifyContent: "center"}}>
                <TabPane tabId='1'>
                    <Row>
                        <Col>
                            <Card body>
                                <Login updateToken={props.updateToken} />
                            </Card>
                        </Col>
                    </Row>
                </TabPane>
                <TabPane tabId='2'>
                    <Row>
                    <Col>
                            <Card body>
                                <Signup updateToken={props.updateToken} />
                            </Card>
                        </Col>
                    </Row>
                </TabPane>
            </TabContent>
        </div>
    )
}

export default Auth