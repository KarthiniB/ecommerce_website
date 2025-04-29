import React, { useContext, useReducer, createContext } from 'react'
import { faker } from '@faker-js/faker';
import { cartReducer } from './Reducers';

export const Cart = createContext();
faker.seed(99);

const Context = ({children}) => {
  const products = [...Array(20)].map(() => ({
    id: faker.string.numeric(5),
    name: faker.commerce.productName(),
    price: faker.commerce.price(),
    image: faker.image.url({width: 100, height: 50}),
    inStock: faker.number.int({ min: 1, max: 10 }),
    fastDelivery: faker.datatype.boolean(),
    ratings: faker.number.int({ min: 1, max: 5 }),
  }));

  const [state, dispatch] = useReducer(cartReducer, {
    products: products,
    cart: []
  })

  return (
    <Cart.Provider 
      value={{ state, dispatch }}>
        {children}
    </Cart.Provider>
  )
}

export default Context

export const CartState = () => {
    return useContext(Cart)
}