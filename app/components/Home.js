import React from 'react';
import { Link } from 'react-router-dom';
import Nav from './Nav';
import Order from './Order';
import Inventory from './Inventory';

class Home extends React.Component {
    constructor(props){
    super(props);

        

}
addProduct(product){
    // const products={...this.state.products};
}
  render() {
    return (
      <div className='home-container'>
          <Inventory/>
        <h1>where my products go</h1>

      </div>
    );
  }
}

export default Home;
