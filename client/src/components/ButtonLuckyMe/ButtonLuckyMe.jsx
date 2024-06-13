import "./buttonLuckyMe.css";
import heartImage from "../../assets/images/coeur_lucky_me_v.png";

function ButtonLuckyMe() {
  return (
    <button className="heart-button" type="button">
      <img src={heartImage} alt="Heart" className="heart-image" />
    </button>
  );
}

export default ButtonLuckyMe;
