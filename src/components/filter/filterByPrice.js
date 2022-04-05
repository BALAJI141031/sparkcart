import './index.css'
import {Button} from '../index'

const FilterByPrice=()=>{

    const sortByPrice=(e)=>{
        
    }
    return <div className="filter">
        <div>
        <p>Price:$10---$50</p> 
         <input
          type="range"
          min="10"
          max="250"
        //   value="50"
          class="slider"
          id="myRange"
          onInput={sortByPrice}
        />
        <div className="flex-H-space-bw">    
            <Button type="btn secondary-btn" text="Filter Now"/>
                   
        </div>
        </div>
    </div>
}

export {FilterByPrice}