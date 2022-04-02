import './index.css'
const ProductCard=({productObj})=>{
  const{price,imageUrl,title,description,productRating,readyToDeliver}=productObj
  console.log(readyToDeliver,"what the hell is this")
    return <div className="flex-V-center-VH "><div className="ver-card pos-rel-Ecase productCard">
    <img src={imageUrl} alt="images" />
    <div className="flex-V-center-VH text-align-center" >
      <h3 >{title}</h3>
      <p>{description}</p>
      <h4>${price}</h4>
      <button  className={readyToDeliver?"btn primary-btn p-card-btn":"btn primary-outlime-btn"}>{readyToDeliver?'Add to cart':"can't Deliver"}</button>
      
    </div>
    <div className="card-badge" >
      <button className="like-icon icon-sm">
        <i className="fas fa-heart"></i>
      </button>
    </div>
    <div className="static-rating-container ratingBadge">
        <div className="flex-H-center-V">
       {productRating}<span className="fa fa-star fa-1x checked"></span>
    </div></div>
  </div></div>
}
export {ProductCard}