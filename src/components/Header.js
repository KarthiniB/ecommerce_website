import React from 'react'
import { Container, Dropdown, FormControl, Nav, Navbar, Badge, Button } from 'react-bootstrap'
import { TiShoppingCart } from 'react-icons/ti'
import { Link } from 'react-router-dom'
import { AiFillDelete } from 'react-icons/ai'
import { CartState } from '../context/Context'

const Header = () => {
    const {
        state: { cart },
        dispatch,
        productDispatch
    } = CartState();
    
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
                    onChange={(e)=>{
                        productDispatch({
                            type: 'FILTER_BY_SEARCH',
                            payload: e.target.value,
                        });
                    }}
                />
            </Navbar.Text>
            <Nav>
                <Dropdown alignRight>
                    <Dropdown.Toggle variant='success'>
                        <TiShoppingCart color='white' size='25px' />
                        <Badge bg="success">{cart.length}</Badge>
                    </Dropdown.Toggle>

                    <Dropdown.Menu style={{ minWidth: 370}}>
                        {cart.length > 0 ? (
                            <>
                                {
                                    cart.map((prod) => (
                                     <span className='cartitem' key={prod.id}>
                                        <img 
                                            src={prod.image}
                                            className='cartItemImg'
                                            alt={prod.name}
                                        />
                                        <div className='cartItemDetail'>
                                            <span>{prod.name}</span>
                                            <span>₹ {prod.price.split('.')[0]}</span>
                                        </div>
                                        <AiFillDelete
                                            fontSize='20px'
                                            style={{ cursor: 'pointer' }}
                                            onClick={() =>
                                                dispatch({
                                                    type: 'REMOVE_FROM_CART',
                                                    payload: prod,
                                                })
                                            }
                                        />
                                     </span> 
                                    ))
                                }
                                <Link to='/cart'>
                                    <Button style={{ width: '95%', margin: '0 10px' }}>
                                        Go To Cart
                                    </Button>
                                </Link>
                            </>
                        ) : (
                            <span style={{ padding: 10}}>Cart is Empty!</span>
                        )}
                        
                    </Dropdown.Menu>
                </Dropdown>
            </Nav>
        </Container>
    </Navbar>
  )
}

export default Header