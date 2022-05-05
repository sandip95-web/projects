import React from 'react'
import { CartState } from '../Context/Context'
import SingleProduct from '../SingleProduct/SingleProduct';
import '../../style.css'
import Filter from '../Filter/Filter'
const Home = () => {
  const {state:{product}}=CartState();
  return (
    <div className="home">
      <Filter/>
    <div className="productContainer">
      {
        product.map((item)=>{
         return(
          <span><SingleProduct item={item} key={item.id}/></span>
         )
        })
      }
    </div>
    </div>
  )
}

export default Home