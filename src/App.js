import React,{Component} from 'react';
import {Navbar,NavbarBrand} from 'reactstrap'
import Menu from './components/MenuComponent';
import logo from './logo.svg';
import './App.css';
import {DISHES} from './shared/dishes.js';

class App extends Component {

  constructor(props){

    super(props);
    this.state= {
      dishes: DISHES
    };
  }
  render() {
  return (
    <div className="App">
       <Navbar dark color="primary">
         <div className= "container">
           <navBrand href= "/">CONFUSION APP</navBrand>
           </div>
         </Navbar>
         <Menu dishes = {this.state.dishes} />
           
    </div>
  );
}
}

export default App;
