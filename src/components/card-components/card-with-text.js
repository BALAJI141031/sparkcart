import './cards.css'
const CardWithText=(props)=>{

    return <div className="cardWithText card">
        <img src="https://b.zmtcdn.com/data/pictures/2/19878202/50ce7585caec037759b188e5ccf9368b.jpeg?fit=around|960:500&crop=960:500;*,*" alt="about" className="aboutImg"/>
        <h1>PROVIDING QUALITY BAKED GOODS FOR ALL CUSTOMERS</h1>
        <p>Our mission is to create a bakery that makes the best quality baked goods on site from scratch, and where both employees and customers would feel comfortable.</p>
        <h3>Read More</h3>
    </div>
}

export {
    CardWithText
}