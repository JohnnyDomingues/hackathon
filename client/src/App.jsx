import "./App.css";
import { useLoaderData } from "react-router-dom";
import { useState } from "react";
import StarCard from "./components/Cards";

function App() {
  const stars = useLoaderData();
  const [rotateCardIndex, setRotateCardIndex] = useState(null); // Indice de la carte à retourner, null signifie aucune carte retournée

  // Définir la fonction getRandomCards avant son utilisation
  const getRandomCards = () => {
    const starsCopy = [...stars];
    const result = [];
    for (let i = 0; i < 4; i += 1) {
      const rand = Math.floor(Math.random() * starsCopy.length);
      result.push(starsCopy.splice(rand, 1)[0]);
    }
    return result;
  };

  const handleRotate = () => {
    const randomIndex = Math.floor(Math.random() * 4);
    setRotateCardIndex(randomIndex);
  };

  const randomCards = getRandomCards();

  return (
    <div className="titles-container">
      <h1>Adopt a star</h1>
      <h2>for a night</h2>

      <button type="button" onClick={handleRotate}>
        Rotate Cards
      </button>
      <div className="cards">
        {randomCards.map((star, index) => (
          <StarCard
            key={star.id}
            star={star}
            rotate={index === rotateCardIndex}
          />
        ))}
      </div>
    </div>
  );
}

export default App;
