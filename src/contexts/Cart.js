import React, {Component} from 'react';

export const CartContext = React.createContext();

export class CartProvider extends Component {
    constructor(props) {
        super(props)
        this.state = {
            cartItem: [],
        }
    }
    addCart = (product) =>{
        console.log("addd", product)
        this.setState({
            cartItem: this.state.cartItem.concat(product)
        })
    }
    render() {
        return <CartContext.Provider value={{cartItem: this.state.cartItem,
            addCart: this.addCart
        }}>
            {this.props.children}
        </CartContext.Provider>
    }
}
