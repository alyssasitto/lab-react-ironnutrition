function SearchFood(props) {
  const { searchFood, searchFoodQuery, foodList } = props;
  console.log(foodList);
  return (
    <div>
      <p>Search</p>
      <input type="text" value={searchFood} onChange={searchFoodQuery}></input>
    </div>
  );
}

export default SearchFood;
