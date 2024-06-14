import "./App.css";
import { useLoaderData } from "react-router-dom";
import StarCard from "./components/Cards";

function App() {
  const stars = useLoaderData();

  const getRandomCards = () => {
    const starsCopy = [...stars];
    const result = [];
    for (let i = 0; i < 4; i += 1) {
      const rand = Math.ceil(Math.random() * starsCopy.length);
      result.push(starsCopy.splice(rand, 1)[0]);
    }

    return result;
  };

  return (
    <div className="titles-container">
      <h1>Adopt a star</h1>
      <h2>for a night</h2>

      {getRandomCards().map((star) => (
        <StarCard key={star.id} star={star} />
      ))}
    </div>
  );
}
export default App;
