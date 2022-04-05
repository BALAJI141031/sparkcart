const Button=(props)=>{
    const {type,text}=props
    return <button className={type} >{text}</button>
}
export {Button}