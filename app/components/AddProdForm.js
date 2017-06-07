import React from 'react';

 class AddProdForm extends React.Component{
constructor(props){
    super(props);

    this.state={
        products:[{
            name:"lil",
            price:3,
            status:"rr",
            desc:"hi",
            image:null,

        }
]
    };
    this.createProduct=this.createProduct.bind(this);
}
createProduct(event){
    event.preventDefault();
    console.log("gonna make some product");
    const product={
        name:this.name.value,
        price:this.price.value,
        status:this.status.value,
        desc:this.desc.value,
        image:this.image.value,

    }

    const newProducts=this.state.products.map((prod)=>{

        if(prod.name!==product.name){
            return Object.assign({}, product);
        }else{

            return product;
        }


    });
    console.log(typeof newProducts);
    this.setState(()=>{
        return {
        products:newProducts
      }
    });

    console.log(this.state.products);

}

     render(){
         return(
            <div>
                <p>hiii form add produc</p>
                <form className="product-edit" onSubmit={(e)=>this.createProduct(e)}>

                     <input ref={(input)=>this.name=input} type="text" placeholder="product name"/>
                     <input ref={(input)=>this.price=input} type="text" placeholder="product price"/>
                     <select ref={(input)=>this.status=input}>
                        <option value="available">Available</option>
                        <option value="unAvailable">Unavailable</option>
                    </select>
                    <textarea ref={(input)=>this.desc=input} placeholder="product description"></textarea>
                    <input ref={(input)=>this.image=input} type="text" placeholder="product image"/>
                     <button type="submit">+Add Item</button>
                </form>

            </div>

         );
     }
 }
export default AddProdForm;
