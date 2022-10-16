import React, { useEffect, useState } from "react";

const SearchMeal = () => {
  const [search, setSearch] = useState("");
  const [meals, setMeals] = useState([]);
  const handleChange = (event) => {
    setSearch(event.target.value);
  };
  useEffect(() => {
    const url = `https://www.themealdb.com/api/json/v1/1/search.php?s=${search}`;
    fetch(url)
      .then((res) => res.json())
      .then((data) => setMeals(data.meals));
  }, [search]);
  //eslint-disable-next-line
  search === "" ? (meals.length = 0) : (meals.length = meals.length);
  return (
    <div>
      <input type="text" onChange={handleChange} placeholder="Cari Makanan" />
      <label for="search" className="search">
        &nbsp;Search Meal
      </label>
      <p>Searching &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;: {search}</p>
      <p>Meal Found &nbsp;: {meals?.length || 0}</p>
      <ul>
        {meals?.map((meal) => (
          <li>{meal.strMeal}</li>
        ))}
      </ul>
    </div>
  );
};

export default SearchMeal;
