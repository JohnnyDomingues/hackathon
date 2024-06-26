import "./card.css";

function StarCard({ star, rotate }) {
  return (
    <div className={`card ${rotate ? "is-flipped" : ""}`}>
      <div className="content">
        <div className="front">?</div>
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
