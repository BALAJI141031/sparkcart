import {useFilter} from '../../contexts/filter-context'
const Rating=(props)=>{
  const {dispatchFilter}=useFilter()
    return  <div class="static-rating-container filter">
        <div className="flex-H-center-V">
      <input type="checkbox" className="checkbox" onClick={(e)=>e.target.checked?dispatchFilter({type:"rating",payload:true}):dispatchFilter({type:"rating",payload:false})}/>
       Above 3 <span class="fa fa-star fa-1x checked"></span>
    </div>
    
  </div>
}

export {Rating}