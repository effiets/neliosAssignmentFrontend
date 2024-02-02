import "./Search.css";
import Edit from '../images/edit.png'

const Search = () => {
  return (
    <div className="search-container">
      <div className="tabs">
        <div className="trips">
          <p>Εκδρομές</p>
        </div>
        <div className="hotels">
          <p>Ξενοδοχεια</p>
        </div>
      </div>
      <div className="search_div">
        <div className="search-fields">
          <div className="fields_destination">
            <p className="fields_text_dest">Προορισμός</p>
            <p className="fields_text_country">Ελλάδα</p>
          </div>
          <div className="fields">
            <p className="fields_text">Check In</p>
          </div>
          <div className="fields">
            <p className="fields_text">Check Out</p>
          </div>
          <div className="fields">
            <p className="fields_text people">Αριθμός Ατόμων</p>
          </div>
        </div>{" "}
        <button className="fields_btn"><p>Αναζήτηση</p></button>
      </div>
      <img className="edit-logo" src={Edit} alt='edit-logo'/>
    </div>
  );
};

export default Search;
