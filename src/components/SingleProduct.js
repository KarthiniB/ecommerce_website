import React from 'react'
import { Button, Card } from 'react-bootstrap'
import Rating from './Rating';
import { CartState } from '../context/Context';


const SingleProduct = ({prod}) => {
    const { state :{ cart },
    dispatch,
    } = CartState();

    console.log(cart)

  return (
    <div className='products'>
    <Card>
        <Card.Img variant='top' src={prod.image} alt={prod.name} />
        <Card.Body>
            <Card.Title>{prod.name}</Card.Title>
            <Card.Subtitle style={{ paddingBottom :10 }}>
                <span>₹ {prod.price.split(".")[0]}</span>
                {prod.fastDelivery ? (
                    <div>Fast Delivery</div>
                ):(
                    <div>4 days Delivery</div>
                )}
                <Rating rating={prod.ratings}/>
            </Card.Subtitle>
            {
                cart.some((p) => p.id === prod.id) ? (
                    <Button 
                        onClick={()=>{
                            console.log("Remove from cart clicked:", prod);
                            dispatch({
                                type: "REMOVE_FROM_CART",
                                payload: prod,
                            });
                        }}
                        variant='danger'
                    >
                    Remove from Cart
                </Button>
                ):(
                    <Button 
                        onClick={() => {
                        dispatch({
                            type: 'ADD_TO_CART',
                            payload: prod,
                        });
                      }} 
                        disabled={!prod.inStock}
                    >
                    {!prod.inStock ? "Out of Stock" : "Add to Cart"}
                </Button>
                )
            }
        </Card.Body>
    </Card>
  </div>
  );
};

export default SingleProduct