import "./App.css";
import { useLoaderData } from "react-router-dom";
import Header from './components/header/Header';
import Footer from "./components/footer/Footer";

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
      <Footer />
    </div>
  );
}

export default App;


