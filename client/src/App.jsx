import "./App.css";
import { useLoaderData } from "react-router-dom";
import Header from './components/header/Header';

function App() {
  const stars = useLoaderData();

  return (
    <div className="app-container">
      <Header />
      <div className="titles-container">
        <ul>
          {stars.map((star) => (
            <li key={star.id}>{star.name}</li>
          ))}
        </ul>
      </div>
    </div>
  );
}

export default App;


