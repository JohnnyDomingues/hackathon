import "./App.css";
import {useLoaderData} from "react-router-dom";

function App() {
  const stars = useLoaderData();

  return (
    <div className="titles-container">
      <h1>Adopt a star</h1>
      <h2>for a night</h2>
      <ul>
        {stars.map((star) => (
          <li key={star.id}>{star.name}</li>
        ))}
      </ul>
    </div>
  );
}

export default App;
