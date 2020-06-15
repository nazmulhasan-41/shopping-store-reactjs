import React, { Component } from 'react';
import {storeProducts,detailProduct} from './data';


const ProductContext=React.createContext();


class ProductProvider extends Component {
    state={
        products:[],
        detailProduct:detailProduct,
        cart:[],
        //cart:storeProducts,
        modalOpen:true,
        modalProduct:detailProduct,

        cartSubTotal:0,
        cartTax:0,
        cartTotal:0,

    }
    componentDidMount(){
        this.setProducts();
    }
    setProducts=()=>{
        let tempProducts=[];
        storeProducts.forEach(item=>{
            const singleItem={...item};
            tempProducts=[...tempProducts,singleItem];
        })
        this.setState(()=>{
            return {products:tempProducts}
        })

    }


    filterProducts=(str)=>{
  
        let lowerdStr=str.toLowerCase();

       // console.log(this.products);

        const selectedProduct=storeProducts.filter(item=>item.title.toLowerCase().includes(lowerdStr) || item.company.toLowerCase().includes(lowerdStr) );
      
        this.setState(()=>{
            return {products:selectedProduct}
        }) 



    }


    
    filterProductsByPrice=(range)=>{
        

    
        const selectedProduct=storeProducts.filter(item=>item.price >= range[0] && item.price <= range[1] );
       
         this.setState(()=>{
            return {products:selectedProduct}
        }) 

    }


    
    getItem=id=>{
        const product = this.state.products.find(item=>item.id===id);
        return product;

    }
    handleDetail=(id)=>{
        const product=this.getItem(id);
     
        this.setState(()=>{
            return {detailProduct:product}
        })
        
    };
    addToCart=(id)=>{
        
        let  tempProducts=[...this.state.products];
        const index=tempProducts.indexOf(this.getItem(id));
        const product=tempProducts[index];
        product.inCart=true;
        product.count=1;
        const price=product.price;
        product.total=price;

        this.setState(()=>{
            return {products:tempProducts,cart:[...this.state.cart,product]};
        },
        ()=>{
            this.addTotal();
        });

    };

    openModal=(id)=>{
        const product=this.getItem(id);

        this.setState(()=>{
            return {modalProduct:product,modalOpen:true}
        })

    }

    closeModal=()=>{

        this.setState(()=>{
            return {modalOpen:false}
        })

    }

    increment=(id)=>{
        let tempCart=[...this.state.cart];
        const selectedProduct=tempCart.find(item=>item.id===id);

        const index=tempCart.indexOf(selectedProduct);
        const product=tempCart[index];

        product.count+=1;
        product.total=product.count * product.price;

        this.setState(()=>{
            return {
                cart:[...tempCart]
            }
        },()=>{
            this.addTotal();

        })

    }

    decrement=(id)=>{
        let tempCart=[...this.state.cart];
        const selectedProduct=tempCart.find(item=>item.id===id);
        

        const index=tempCart.indexOf(selectedProduct);
        const product=tempCart[index];
        
        if(product.count===1)
        {
            this.removeItem(id);
            

        }
        else{
            product.count-=1;
        product.total=product.count * product.price;

        this.setState(()=>{
            return {
                cart:[...tempCart]
            }
        },()=>{
            this.addTotal();
            
        })

        }

        
    }
    removeItem=(id)=>{
        
        let tempProducts=[...this.state.products];
        let teampCart=[...this.state.cart];

        teampCart=teampCart.filter(item=> item.id!==id);

        const index=tempProducts.indexOf(this.getItem(id));
        let removedProduct=tempProducts[index];
        removedProduct.inCart=false;
        removedProduct.count=0;
        removedProduct.total=0;


        this.setState(
            ()=>{
                return {
                    cart:[...teampCart],
                    products:[...tempProducts]
                };
                    
                
            },()=>{
                this.addTotal();
            }
        )


    }
    clearCart=()=>{
        
        this.setState(()=>{
            return {cart:[]}
        },()=>{
            this.setProducts();
            this.addTotal();
        })
    }

    addTotal=()=>{
        let subTotal=0;
        this.state.cart.map(item=>(subTotal+=item.total));
        const tempText=subTotal*.1;
        const tax=parseFloat(tempText.toFixed(2));
        const total =subTotal+tax;

        this.setState(()=>{
            return {
                cartSubTotal:subTotal,
                cartTax:tax,
                cartTotal:total,
            }
        })
    }



    render() {
        return (
            <ProductContext.Provider value={{
                ...this.state,
                handleDetail:this.handleDetail,
                addToCart:this.addToCart,
                openModal:this.openModal,
                closeModal:this.closeModal,


                increment:this.increment,
                decrement:this.decrement,
                removeItem:this.removeItem,
                clearCart:this.clearCart,



                filterProducts:this.filterProducts,
                setProducts:this.setProducts,
                filterProductsByPrice:this.filterProductsByPrice,

            }} >

                {this.props.children}

                </ProductContext.Provider>
        );
    }
}

const ProductConsumer=ProductContext.Consumer;  

export {ProductProvider,ProductConsumer} ;