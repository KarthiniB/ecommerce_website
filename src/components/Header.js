import React from 'react'
import {Badge, Container, Dropdown, FormControl, Nav, Navbar} from 'react-bootstrap'
import {TiShoppingCart} from 'react-icons/ti'
import {Link} from 'react-router-dom'
const Header = () => {
  return (
    <Navbar bg='dark' variant='dark' style={{height: 80}}>
        <Container>
            <Navbar.Brand>
                <Link to='/'>Pristac Boutique</Link>
            </Navbar.Brand>
            <Navbar.Text className='search'>
                <FormControl 
                    style={{ width: 500}} 
                    placeholder='Search any product' 
                    className='m-auto'
                />
            </Navbar.Text>
            <Nav>
                <Dropdown alignRight>
                    <Dropdown.Toggle variant='success'>
                        <TiShoppingCart color='white' size='25px' />
                        <Badge>{10}</Badge>
                    </Dropdown.Toggle>

                    <Dropdown.Menu style={{ minWidth: 370}}>
                        <span style={{ padding: 10}}>Cart is Empty!</span>
                    </Dropdown.Menu>
                </Dropdown>
            </Nav>
        </Container>
    </Navbar>
  )
}

export default Header