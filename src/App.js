import { useState, useCallback, useEffect } from "react";
import Search from "./components/Search";
import Filters from "./components/Filters";
import ResultCard from "./components/ResultCard";
import "./App.css";

function App() {
  const [results, setResults] = useState();
  const [filterResults, setFilterResult] = useState();
  const [checkedValues, setChekedvalues] = useState([]);
  const [sortValue, setSortValue] = useState("asc");
  const [isVissible, setIsVissible] = useState(true)

  //filter results by price
  const priceFilterHandler = (price) => {
    if (price === "low") {
      setFilterResult(results.filter((p) => p.price <= 200));
    } else if (price === "medium") {
      setFilterResult(results.filter((p) => p.price > 200 && p.price <= 350));
    } else if (price === "high") {
      setFilterResult(results.filter((p) => p.price > 350));
    } else {
      setFilterResult(results);
    }
  };

  //filter results by meal
  const mealFilterHandler = (val) => {
    const { value, checked } = val;

    if (checked) {
      setChekedvalues((pre) => [...pre, value]);
    } else
      setChekedvalues((pre) => {
        return [...pre.filter((p) => p !== value)];
      });
  };

  // set sorting value
  const selectHandler = (e) => {
    setSortValue(e.target.value);
  };

  const filterVissibleHandler =(val) =>{
    setIsVissible(val)
  }

  //fetch data from the backeend
  const fetchResultHandler = useCallback(async () => {
    try {
      const response = await fetch("http://localhost:8000/api/trips");

      if (!response.ok) {
        throw new Error(response.Error);
      }

      const dataResults = await response.json();
      setResults(dataResults.data);
      setFilterResult(dataResults.data);
    } catch (error) {
      console.log(error);
    }
  }, []);

  useEffect(() => {
    fetchResultHandler();
  }, [fetchResultHandler]);

  return (
    <>
      <div className="breadcrumps">
        <p>
          Home <span>&gt;</span> Greece <span>&gt;</span> Offers
        </p>
      </div>
      <div className="title">
        <h1>ΕΛΛΑΔΑ</h1>
        <p>Πακέτα - Προσφορές</p>
      </div>
      <Search />

      <div className="main_container">
        <div className="filter_main-container" style={{ visibility: isVissible ? "visible" : "hidden" }}>
          <Filters
            onPriceChange={priceFilterHandler}
            onMealChange={mealFilterHandler}
            onChangeVissibility={filterVissibleHandler}
          />
        </div>
        <div className="main_results-container">
          <div className="orderBy_container">
            <p>
              Βρεθηκαν <span>{filterResults?.length}</span> αποτελεσματα
            </p>
            <div className="order-filter_btn">
              <button className="mobile_btn" onClick={() =>{setIsVissible(true)}}>
                <p className="filters-title_btn">Φίλτρα</p>
              </button>
              <select onChange={selectHandler}>
                Order by
                <option value="asc">Αυξουσα τιμη</option>
                <option value="des">Φθηνουσα τιμη</option>
                <option value="rating">Rating</option>
              </select>
            </div>
          </div>
          <div className="result_container">
            {sortValue === "asc" &&
              (checkedValues.length !== 0
                ? filterResults
                    ?.filter((m) => checkedValues.includes(m.meal_plan))
                    .sort((a, b) => a.price - b.price)
                    .map((item) => (
                      <ResultCard
                        key={item.name}
                        city={item.city}
                        meal={item.meal_plan}
                        name={item.name}
                        photo={item.photo}
                        price={item.price}
                        rating={item.rating}
                      />
                    ))
                : filterResults
                    ?.sort((a, b) => a.price - b.price)
                    .map((item) => (
                      <ResultCard
                        key={item.name}
                        city={item.city}
                        meal={item.meal_plan}
                        name={item.name}
                        photo={item.photo}
                        price={item.price}
                        rating={item.rating}
                      />
                    )))}

            {sortValue === "des" &&
              (checkedValues.length !== 0
                ? filterResults
                    ?.filter((m) => checkedValues.includes(m.meal_plan))
                    .sort((a, b) => b.price - a.price)
                    .map((item) => (
                      <ResultCard
                        key={item.name}
                        city={item.city}
                        meal={item.meal_plan}
                        name={item.name}
                        photo={item.photo}
                        price={item.price}
                        rating={item.rating}
                      />
                    ))
                : filterResults
                    ?.sort((a, b) => b.price - a.price)
                    .map((item) => (
                      <ResultCard
                        key={item.name}
                        city={item.city}
                        meal={item.meal_plan}
                        name={item.name}
                        photo={item.photo}
                        price={item.price}
                        rating={item.rating}
                      />
                    )))}

            {sortValue === "rating" &&
              (checkedValues.length !== 0
                ? filterResults
                    ?.filter((m) => checkedValues.includes(m.meal_plan))
                    .sort((a, b) => b.rating - a.rating)
                    .map((item) => (
                      <ResultCard
                        key={item.name}
                        city={item.city}
                        meal={item.meal_plan}
                        name={item.name}
                        photo={item.photo}
                        price={item.price}
                        rating={item.rating}
                      />
                    ))
                : filterResults
                    ?.sort((a, b) => b.rating - a.rating)
                    .map((item) => (
                      <ResultCard
                        key={item.name}
                        city={item.city}
                        meal={item.meal_plan}
                        name={item.name}
                        photo={item.photo}
                        price={item.price}
                        rating={item.rating}
                      />
                    )))}
          </div>
        </div>
      </div>
      <div className="promo_container">
        <div className="image-container">
          <div className="image-title">
            <p>ΔΕΝ ΒΡΗΚΑΤΕ ΑΥΤΟ ΠΟΥ ΨΑΧΝΕΤΕ;</p>
            <button>Επικοινωνίστε μαζι μας</button>
          </div>
        </div>
      </div>
    </>
  );
}

export default App;
