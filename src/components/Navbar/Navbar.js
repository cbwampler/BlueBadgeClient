import React, {useState} from 'react'
import {Navbar, NavbarBrand, Collapse, NavbarToggler, Nav, NavItem, Button} from 'reactstrap'

const style=
{navbarDefault:{backgroundColor: '#EFECF3'}}

const Sitebar = (props) => {
    let [isOpen, setisOpen] = useState(false)

    const toggle = () => {
        let IsOpen = !isOpen
        setisOpen(IsOpen)
    }

    return(
        <Navbar style={style.navbarDefault} color='faded' light expand ='md'>
            <NavbarBrand href='/'>Testcase Database</NavbarBrand>
            <NavbarToggler onClick={toggle} />
            <Collapse isOpen={isOpen} navbar>
                <Nav className='ml-auto' navbar>
                    <NavItem>
                        <Button onClick={props.clickLogout} style={{backgroundColor: '#624292'}}>Logout</Button>
                    </NavItem>
                </Nav>
            </Collapse>
        </Navbar>
    )
}

export default Sitebar