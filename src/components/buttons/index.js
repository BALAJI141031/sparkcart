const Button=(props)=>{
    const {type,text,redirect}=props

    const clickHandler=()=>redirect()

    return <button className={type} onClick={clickHandler}>{text}</button>
}
export {Button}