import { createContext, useContext, useReducer, useState } from "react"

const cartContext=createContext()

const CartProvider=({children})=>{ 
    const reducerFn=(cartState,action)=>{
        switch(action.type){
            case 'cart':
                return {...cartState,cart:[...action.payload.cart],cartCount:action.payload.cartCount}
            default :
              return {...cartState}
        }
    
    }
       
    const [{cart,cartCount,wishlistCount},dispatchCart]=useReducer(reducerFn,{cart:[],cartCount:0,wishlistCount:0})
    return <cartContext.Provider value={{cart,dispatchCart,cartCount,wishlistCount}}>
    {children}
    </cartContext.Provider>
}

const useCart=()=>useContext(cartContext)

export {CartProvider,useCart}