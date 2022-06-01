import './index.css'
export function AboutProduct({detials}) {
    const {text,icon}=detials
    return <div className="flex-H-center-V product-detials">
        <p style={{"fontSize":"1.5rem"}} className="text-grey">{icon}</p>
        <p style={{ "margin-bottom": "15px" }}>{text}</p>
    </div>
}