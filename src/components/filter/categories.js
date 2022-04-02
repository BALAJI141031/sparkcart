import './index.css'
import {useFilter} from '../../contexts/filter-context'

const Categories=()=>{
  const {dispatchFilter}=useFilter()
    return  <>
    <div className="flex-H-space-bw filter">
    <div className="flex-H-center-V">
      <input type="checkbox" className="checkbox" onClick={(e)=>e.target.checked?dispatchFilter({type:"vegetarian",payload:false}):dispatchFilter({type:"vegetarian",payload:true})}/>
      <p className="checkboxLabel">Show Pure Nonveg</p>
    </div>
    <p>(45)</p>
  </div>
  <div className="flex-H-space-bw filter">
    <div className="flex-H-center-V">
      <input type="checkbox" className="checkbox" onClick={(e)=>e.target.checked?dispatchFilter({type:"delivery",payload:true}):dispatchFilter({type:"delivery",payload:false})}/>
      <p className="checkboxLabel">Fast Delivery</p>
    </div>
    <p>(20)</p>
  </div>  
  </>
}

export {Categories}