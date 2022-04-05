import "./index.css"
import {Button} from '../index'

const Hero=(props)=>{
       
    const {title,description,image}=props
    return <div className="hero-card">
          <h2>Delicious Biriyani For You</h2>
          <p>Hotel Gayathri Grand Inn offers the best Biriyani for you</p>
          <Button type="btn primary-btn" text="order Now"/>
    </div>
}

export {Hero}