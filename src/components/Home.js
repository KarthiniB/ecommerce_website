import React from 'react'
import { CartState } from '../context/Context';
import SingleProduct from './SingleProduct';
import Filters from './Filters';
import './styles.css'

const Home = () => {
    const { state : { products },
    productState : { sort, byStock, byFastDelivery, byRating, searchQuery }, 
} = CartState(); //destructuring the products
    
    const transformProducts = () => {
        let sortedProducts = products;
        if (sort){
            sortedProducts = sortedProducts.sort((a,b) => 
                sort === 'lowToHigh' ? a.price - b.price : b.price - a.price
            );
        }

        if (!byStock) {
            sortedProducts = sortedProducts.filter((prod) => prod.inStock);
        }

        if (byFastDelivery) {
            sortedProducts = sortedProducts.filter((prod) => prod.byFastDelivery);
        }

        if (byRating) {
            sortedProducts = sortedProducts.filter(
                (prod) => prod.byRating >= byRating
            );
        }

        if (searchQuery) {
            sortedProducts = sortedProducts.filter((prod) => 
                prod.name.toLowerCase().includes(searchQuery)
            );
        }

        return sortedProducts;
    };
  return (
    <div className='home'>
        {<Filters/>}
        <div className='productContainer'>
            {
                transformProducts().map((prod) => {
                    return <SingleProduct prod={prod} key={prod.id}/>
                })
            }
        </div>
    </div>
  );
};

export default Home