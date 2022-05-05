import React from 'react'
import {Badge,Dropdown,Nav,Container, FormControl, Navbar, NavbarBrand, Button } from 'react-bootstrap'
import {Link} from 'react-router-dom' 
import {FaShoppingCart} from 'react-icons/fa'
import { CartState } from '../Context/Context'
import{AiFillDelete} from 'react-icons/ai'
import '../../style.css'
const Header = () => {
    const{state:{cart},dispatch}=CartState();
  return (
    <Navbar bg='dark' variant='dark' style={{height:80}}>
        <Container>
            <NavbarBrand>
                <Link to='/' className='h-link'>Shopping Cart</Link>
            </NavbarBrand>
            <Navbar.Text className='search'>
                <FormControl style={{width:500}} placeholder='Search a product'className='m-auto'></FormControl>
            </Navbar.Text>
            <Nav>
      <Dropdown className="main">
  <Dropdown.Toggle variant="success" id="dropdown-basic">
    <FaShoppingCart color="white" fontSize='25px' />
    <Badge bg='green'>{cart.length}</Badge>
  </Dropdown.Toggle>
  <Dropdown.Menu className="main_item">
    {
      cart.length>0?(
        <div>
          {
             cart.map((item)=>(
                <span className="cartitem">
              <img src={item.image} className='cartItemImg' alt={item.name}/>
              <div className="cartItemDetail">
              <span>{item.name}</span>
              <span>$ {item.price.split(".")[0]}</span>
            </div>
            <AiFillDelete fontSize="20px" style={{cursor:"pointer"}}onClick={()=>dispatch({type:"Remove_From_Cart",payload:item})} />
               </span>
            ))
          }
          <Link to='/Cart'>
            <Button bg="blue" style={{width:"95%",margin:"0 7px"}}>Go To Cart</Button>
          </Link>
        </div>
      ):(
        <span style={{padding:10}}>Cart is Empty!</span>
      )
    }
    
  </Dropdown.Menu>
</Dropdown>
  </Nav>
        </Container>
    </Navbar>
  )
}

export default Header