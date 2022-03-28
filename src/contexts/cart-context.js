import { createContext, useContext, useReducer, useState } from "react"

const cartContext=createContext()

const reducerFn=()=>{

}


const CartProvider=({children})=>{
    const [{cart},dispatchCart]=useReducer(reducerFn,{cart:[]})

    return <cartContext.Provider value={{cart,dispatchCart}}>
    {children}
    </cartContext.Provider>
}

const useCart=()=>useContext(cartContext)

export {CartProvider,useCart}