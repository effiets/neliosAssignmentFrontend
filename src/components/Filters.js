import "./Filters.css";
import closeBtn from "../images/close.png";

const Filters = (props) => {
  //price value
  const onRadioChange = (event) => {
    props.onPriceChange(event.target.value);
  };

  //meal value
  const handleCheck = (e) => {
    props.onMealChange(e.target);
  };

  //handle mobile menu for filters
  const handleVissible = () => {
    props.onChangeVissibility(false);
  };

  return (
    <div className="filter-container">
      <div className="filter_title-container">
        <h5>ΦΙΛΤΡΑ</h5>
        <img src={closeBtn} alt="close-btn" onClick={handleVissible} />
      </div>
      <div className="price">
        <h7>ΕΥΡΟΣ ΤΙΜΗΣ</h7>
        <div className="price_selection-container">
          <label>
            <input
              type="radio"
              id="contactChoice1"
              name="price"
              value="low"
              onChange={onRadioChange}
            />
            Έως 200 Ευρώ
          </label>
          <label>
            <input
              type="radio"
              id="contactChoice2"
              name="price"
              value="medium"
              onChange={onRadioChange}
            />
            200-350 Ευρώ
          </label>
          <label>
            <input
              type="radio"
              id="contactChoice3"
              name="price"
              value="high"
              onChange={onRadioChange}
            />
            Πάνω από 350 Έυρώ
          </label>
          <label>
            <input
              type="radio"
              id="contactChoice3"
              name="price"
              value="all"
              onChange={onRadioChange}
            />
            Όλα
          </label>
        </div>
      </div>

      <hr className="line"></hr>
      <div className="meal">
        <h7>MEAL PLAN</h7>
        <div className="meal_selection-container">
          {" "}
          <label>
            <input
              type="checkbox"
              name="meal"
              value="All Inclusive"
              onChange={handleCheck}
            />
            All Inclusive
          </label>
          <label>
            <input
              type="checkbox"
              name="meal"
              value="Bed Breakfast"
              onChange={handleCheck}
            />
            Bed Breakfast
          </label>
          <label>
            <input
              type="checkbox"
              name="meal"
              value="Half Board"
              onChange={handleCheck}
            />
            Half Board
          </label>
          <label>
            <input
              type="checkbox"
              name="meal"
              value="Room Only"
              onChange={handleCheck}
            />
            Room Only
          </label>
        </div>
      </div>
      <hr className="line"></hr>
    </div>
  );
};

export default Filters;
