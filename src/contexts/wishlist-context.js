import { createContext, useContext, useReducer, useState } from "react"

const wishlistContext=createContext()

const WishlistProvider=({children})=>{ 
    const reducerFn=(wishlistState,action)=>{
        switch(action.type){
            case 'wishlist':
                return {...wishlistState,wishlist:[...action.payload]}
            default :
              return {...wishlistState}
        }
    }
       
    const [{wishlist},dispatchWishlist]=useReducer(reducerFn,{wishlist:[]})
    console.log(wishlist,"at one step back")
    return <wishlistContext.Provider value={{wishlist,dispatchWishlist}}>
    {children}
    </wishlistContext.Provider>
}
const useWishlist=()=>useContext(wishlistContext)

export {WishlistProvider,useWishlist}