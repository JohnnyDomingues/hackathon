import "./App.css";
import { useLoaderData } from "react-router-dom";
import ButtonLuckyMe from "./components/ButtonLuckyMe/ButtonLuckyMe";

function App() {
  const stars = useLoaderData();

  return (
    <div className="titles-container">
      <h1>Adopt a star</h1>
      <h2>for a night</h2>
      <div className="lucky-div">
        <h3>Who is going to be my date?</h3>
      <ButtonLuckyMe />
      </div>
      <ul>
        {stars.map((star) => (
          <li key={star.id}>{star.name}</li>
        ))}
      </ul>
    </div>
  );
}

export default App;
