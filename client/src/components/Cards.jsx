import "./card.css";

function StarCard({ star }) {
  return (
    <div className="card">
      <div className="content">
        <div className="front">Choose me</div>
        <div className="back">
          <div className="subcard-image">
            <img className="card-image" src={star.image} alt={star.name} />
          </div>
          <div className="card-infos">
            <h2>{star.name}</h2>
            <div className="subcard">
              <p>{star.gender}</p>
            </div>
            <div className="subcard">
              <p>{star.homeworld}</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default StarCard;
