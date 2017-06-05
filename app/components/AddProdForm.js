import React from 'react';

 class AddProdForm extends React.Component{
     createProduct(event){
         event.preventDefault();
         console.log("making some fish");
         const product={
             name:this.name,
             price:this.price,
             status:this.status,
             desc:this.desc,
             image:this.image,

         }
         console.log(product);

     }
     render(){
         return(
            <div>
                <p>hiii form add produc</p>
                <form className="product-edit" onSubmit={(e)=>this.createProduct(e)}>

                     <input ref={(input)=>this.name=input}type="text" placeholder="product name"/>
                     <input ref={(input)=>this.price=input}type="text" placeholder="product price"/>
                     <select ref={(input)=>this.status=input}>
                        <option value="available">Available</option>
                        <option value="unAvailable">Unavailable</option>
                    </select>
                    <textarea ref={(input)=>this.desc=input}placeholder="product description"></textarea>
                    <input ref={(input)=>this.image=input}type="text" placeholder="product image"/>
                     <button type="submit">+Add Item</button>
                </form>

            </div>

         );
     }
 }
export default AddProdForm;
