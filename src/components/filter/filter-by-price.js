import './filter.css'

const FilterByPrice=()=>{

    const sortByPrice=(e)=>{
        console.log(e.value)
    }
    return <div className="filter">
        <div>
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
            <button>Apply Price</button>
            <p>Price:$10---$50</p>
            
        </div>
        </div>
    </div>
}

export {FilterByPrice}