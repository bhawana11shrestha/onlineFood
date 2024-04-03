import './App.css';
import Home from './screens/Home';
import Login from './screens/Login';
import{
  BrowserRouter as Router,
  Routes, 
  Route
} from "react-router-dom";
import "../node_modules/bootstrap/dist/js/bootstrap.bundle";
import "../node_modules/bootstrap/dist/js/bootstrap.bundle.min.js";
import Signup from './screens/Signup.js';
import { CartProvider } from './components/ContextReducer.js';

function App() {
  return (
    <CartProvider>
    <Router>
    <div>
      <Routes>
        <Route exact path ="/" element ={<Home />}></Route>
        <Route exact path ="/login" element ={<Login />}></Route>
        <Route exact path = "/createuser" element = {<Signup></Signup>}></Route>
      </Routes>
    </div>
    </Router>
    </CartProvider>
  );
}

export default App;
