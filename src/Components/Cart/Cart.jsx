import React, { useEffect, useState } from 'react'
import { CartState } from '../Context/Context'
import "../../style.css"
import { Button, ListGroup,Row,Col, Form,Image} from 'react-bootstrap';
import Rating from '../Rating/Rating'
import { AiFillDelete } from 'react-icons/ai';
const Cart = () => {
  const{state:{cart},dispatch}=CartState();
  const[total,setTotal]=useState();
  useEffect(()=>{
    setTotal(cart.reduce((arr,curr)=>arr+Number(curr.price)*curr.qty,0))
  },[cart])
  
  return (
    <div className='home'>
      <div className="productContainer">
        <ListGroup>
          {
            cart.map((item)=>(
                 <ListGroup.Item key={item.id} className="edit">
                    <Row className="edit1">
                    <Col md={2}>
                        <Image src={item.image} alt={item.name} fluid rounded></Image>
                      </Col>
                      <Col md={2}>
                        <span>{item.name}</span>
                      </Col>
                      <Col md={2}>
                        <span>${item.price}</span>
                      </Col>
                      <Col md={2}>
                        <Rating rating={item.rating}/>
                      </Col>
                      <Col md={2}>
                        <Form.Control as="select" value={item.qty}>
                           {
                             [...Array(item.inStock).keys()].map((x)=>(
                               <option key={x+1}>{x+1}</option>
                             ))
                           }
                        </Form.Control>
                      </Col>
                      <Col md={2}>
                        <Button type='button' variant='light' onClick={()=>dispatch({type:'Remove_From_Cart',payload:item})}><AiFillDelete fontSize="20px"/></Button>
                      </Col>
                    </Row>
                 </ListGroup.Item>
                 
            ))
          }
        </ListGroup>
      </div>
      <div className="filter summary">
           <span className="title">Subtotal ({cart.length}) items</span>
           <span style={{fontWeight:700, fontSize:20}}>Total: $ {total}</span>
           <Button type='button' disabled ={cart.legnth===0}>Proceed to Checkout</Button>
      </div>
    </div>
  )
}

export default Cart