import "./ResultCard.css";

const ResultCard = (props) => {
  return (
    <div className="card_container">
      <img className="cart-image" alt="props.name" src={props.photo} />
      <div className="main-info">
        <p className="cart-title">{props.name}</p>
        <p className="cart-city">{props.city}</p>
        <p className="cart-meal">{props.meal}</p>
      </div>
      <div className="price-info">
        <p>
          <span>ΑΠΟ </span>
          {props.price} €
        </p>
        <button className="resrvation-btn">make a reservation</button>
      </div>

      <div className="rating">
        <p>Βαθμολογία: {props.rating} / 5</p>
      </div>
    </div>
  );
};

export default ResultCard;
