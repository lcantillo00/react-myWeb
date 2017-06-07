import React from 'react';
import PropTypes from 'prop-types';
import AddProdForm from './AddProdForm';


class Inventory extends React.Component{


    render(){
        return(
            <div>

                <AddProdForm addProduct={this.props.addProduct}/>
            </div>

        );
    }
}
export default Inventory;
