import "./index.css";
const ServiceCard = () => {
  return (
    <div className="serviceCard flex-V-center-VH">
      <div class="sq-card">
        <img
          src="https://b.zmtcdn.com/webFrontend/e5b8785c257af2a7f354f1addaf37e4e1647364814.jpeg?fit=around|402:360&crop=402:360;*,*"
          alt="service-card"
        />
        <h4>Hyderbad Dum Biriyani</h4>
        <p>Indian,Chinese,Deserts</p>
        <div class="flex-space-between">
          <div class="flex-H-center-V">
            <i class="fas fa-star"></i>
            <p>4.8</p>
          </div>
          <p>35 MINS</p>
          <p>$4 half Plate</p>
        </div>
        <hr />
        <button class="btn primary-btn">Explore</button>
        <div class="badge border-radius">Newly added</div>
      </div>
    </div>
  );
};

export { ServiceCard };
