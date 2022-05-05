import Header from './Components/Header/Header'
import{BrowserRouter as Router,Route,Routes} from 'react-router-dom'
import Home from './Components/Home/Home'
import './App.css'
import Cart from './Components/Cart/Cart'
function App() { 
  return (
    <div className="App">
     <Router>
     <Header />
       <Routes>
          <Route exact path='/' element={<Home/>} /> 
          <Route exact path='/Cart' element={<Cart/>} /> 
       </Routes>
     </Router>
    </div>
  );
}

export default App;
