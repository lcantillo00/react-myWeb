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
  render() {
    return (
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
    );
  }
}

export default App;
