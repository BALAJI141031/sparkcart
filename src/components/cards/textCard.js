import './index.css'

const TextCard=(props)=>{
    const {textObj}=props
    const {aboutUs}=textObj
    return <div className="cardWithText ">
        <h4>{aboutUs}</h4>
    </div>
}

export {
    TextCard
}