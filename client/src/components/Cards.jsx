// import "./card.css";

// function StarCard({ star }) {
//   return (
//     <div className="card">
//       <div className="content">
//         <div className="front">Choose me</div>
//         <div className="back">
//           <div className="subcard-image">
//             <img className="card-image" src={star.image} alt={star.name} />
//           </div>
//           <div className="card-infos">
//             <h2>{star.name}</h2>
//             <div className="subcard">
//               <p>{star.gender}</p>
//             </div>
//             <div className="subcard">
//               <p>{star.homeworld}</p>
//             </div>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// }

// export default StarCard;

// import { useState, useEffect } from "react";
// import "./card.css";

// function StarCard({ star, rotate }) {
//   const [isRotated, setIsRotated] = useState(false);

//   useEffect(() => {
//     setIsRotated(false); // Réinitialiser la rotation lorsque rotate change
//   }, [rotate]);

//   const handleCardClick = () => {
//     setIsRotated(!isRotated); // Inverser l'état de la rotation au clic sur la carte
//   };

//   return (
//     <div
//       className={`card ${isRotated || rotate ? "is-flipped" : ""}`}
//       onClick={handleCardClick}
//     >
//       <div className="content">
//         <div className="front">Choose me</div>
//         <div className="back">
//           <div className="subcard-image">
//             <img className="card-image" src={star.image} alt={star.name} />
//           </div>
//           <div className="card-infos">
//             <h2>{star.name}</h2>
//             <div className="subcard">
//               <p>{star.gender}</p>
//             </div>
//             <div className="subcard">
//               <p>{star.homeworld}</p>
//             </div>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// }

// export default StarCard;

import "./card.css";

function StarCard({ star, rotate }) {
  return (
    <div className={`card ${rotate ? "is-flipped" : ""}`}>
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
