import {useFilter} from '../contexts/filter-context'
import { useEffect } from 'react'
import axios  from "axios";
import {FilterByPrice} from '../components/filter/filter-by-price'
import {Categories} from '../components/filter/categories'
import {Rating} from '../components/filter/ratings'
import {ProductCard} from '../components/card-components/product-card'
import {SortBy} from '../components/filter/sort'
import {Navbar} from '.././components/navbar-components/complete-navbar'
import { Sidenavbar } from '../components/side-Navbar/sidebar';
const Products= ()=>{

    const {dispatchFilter,filteredList}=useFilter()
  
    useEffect(()=>{
      axios.get('/api/products').then((response)=>{ 
       
          dispatchFilter({type:"products",payload:response.data.products})
      } )
    },[])
  
      return<> 
      <Navbar/>
      <h2>Sort By Price</h2>
      <SortBy />
      <h2>CATEGORIES</h2>
      <hr/>
      <Categories />
      <h2>RATINGS</h2>
      <hr/>
       <Rating/>
      <h2>Filter By Price</h2>
      <hr/>
      <FilterByPrice/>
      <hr/>
      <h2>Products</h2>
      {filteredList.map((item)=> {
      return <ProductCard productObj={item}/>
      })}
      <Sidenavbar/>     
    </> 
  }
  export {Products}