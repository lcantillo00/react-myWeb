import React from 'react';
import Inventory from './Inventory';
import {
  BrowserRouter as Router,
  Route,
  Switch
} from 'react-router-dom';
import Nav from './Nav';
import Home from './Home';
import Order from './Order';


class App extends React.Component {
    constructor(props){
        super(props);
         this.addProduct=this.addProduct.bind(this);


    }
    addProduct(product){
        // const products={...this.state.products};
        const timesStamp=Date.now();
        products[`product-${timesStamp}`]=product;
        this.setState({products})

    }
  render() {
    return (
        <div>
            <Router>
              <div className='container'>
                <Nav />
                <Switch>
                  <Route exact path='/' component={Home} />
                  <Route exact path='/order' component={Order} />

                  <Route path='/inventory' component={Inventory} />
                  {/* <Route render={function() {
                    return <p>Not Found</p>;
                  }} /> */}
                </Switch>
              </div>
            </Router>

        </div>

    );
  }
}

export default App;
