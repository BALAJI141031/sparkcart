import { createContext, useContext, useReducer,useEffect } from "react";


const filterContext=createContext()
const FilterProvider=({children})=>{

    const reducerFn=(filterState,filterAction)=>{
        console.log(filterAction.type,"fromswitch",filterAction.payload)
        switch(filterAction.type){
            case "products":
                return {...filterState,productsList:[...filterAction.payload]}
            case "sort":
                return {...filterState,sortBy:filterAction.payload}
            case "vegetarian":
                return {...filterState,vegetarian:filterAction.payload}
            case "delivery":
                    return {...filterState,delivery:filterAction.payload}
            case "rating":
                    return {...filterState,rating:filterAction.payload}
            default:
                return {}
        }
    }

    const [{sortBy,productsList,vegetarian,delivery,rating},dispatchFilter]=useReducer(reducerFn,{allProducts:true,sortBy:null,productsList:[],vegetarian:true,delivery:false,rating:false})

    
    // filter functions        
    const sortProducts=(products,sortBy)=>{
        console.log(sortBy,"check1",products)
        if(sortBy==="low_to_high"){
            return products.sort((a,b)=>a.price-b.price)
        }else if (sortBy==="high_to_low"){ 
            return products.sort((a,b)=>b.price-a.price)
        }else{    
            return products
        }
    }

    const applyFilters=(sortedProducts,filterObj)=>{
        const {vegetarian,delivery,rating}=filterObj

        return sortedProducts.filter(({vegetarianP})=>vegetarian?true:!vegetarianP    
        ).filter(({fastDelivery})=>delivery?fastDelivery:true)
        .filter(({productRating})=>rating?productRating>=3:true)
    }   

    const sortedProducts=sortProducts(productsList,sortBy)
    const filteredProducts=applyFilters(sortedProducts,{vegetarian,delivery,rating})
    
    let filteredList=[...filteredProducts]

    return <filterContext.Provider value={{dispatchFilter,filteredList}}>
   {children}
    </filterContext.Provider>

}
const useFilter=()=>useContext(filterContext)

export {FilterProvider,useFilter}