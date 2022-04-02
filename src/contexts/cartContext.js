import { createContext, useContext, useReducer, useState } from "react"

const cartContext=createContext()

const CartProvider=({children})=>{ 
    const reducerFn=(cartState,action)=>{
        switch(action.type){
            case 'cart':
                return {...cartState,cart:[...action.payload]}
            default :
              return {...cartState}
        }
    
    }
       
    const [{cart},dispatchCart]=useReducer(reducerFn,{cart:[]})
    return <cartContext.Provider value={{cart,dispatchCart}}>
    {children}
    </cartContext.Provider>
}

const useCart=()=>useContext(cartContext)

export {CartProvider,useCart}