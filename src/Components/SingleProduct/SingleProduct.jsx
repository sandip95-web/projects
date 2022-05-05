import React from 'react'
import {Card,Button} from 'react-bootstrap'
import Rating from '../Rating/Rating'
import '../../style.css'
import { CartState } from '../Context/Context'

const SingleProduct = ({item}) => {
    const{state:{cart},dispatch}=CartState();
  return (
    <div className="product">
      <Card>
        <Card.Img variant="top" src={item.image} />
        <Card.Body>
          <Card.Title>{item.name}</Card.Title>
          <Card.Subtitle style={{paddingBottom:10}}>
             <span>
                ${item.price.split(".")[0]}
             </span>
             {
               item.fastDelivery ? (<div>Fast Delivery</div>):<div>(4 days Delivery)</div>
             }
             <Rating rating={item.ratings} />
          </Card.Subtitle>
          {
            cart.some(p=>p.id===item.id)?(
              <Button variant='danger' onClick={()=>dispatch({type:"Remove_From_Cart",payload:item})}>Remove From Cart</Button>
            ):(
              <Button onClick={()=>dispatch({type:"Add_To_Cart",payload:item})} disabled={!item.inStock}>{!item.inStock ? 'Out Of Stock' : 'Add To Cart'}</Button>
            )
          }
          
          
        </Card.Body>
      </Card>
    </div>
  )
}

export default SingleProduct