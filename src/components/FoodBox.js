function FoodBox(props) {
  const { foodList, deleteFood } = props;

  return (
    <div className="food-container">
      {foodList.map((food, index) => {
        console.log(food, index);
        return (
          <div>
            <p>{food.name}</p>
            <img src={food.image} className="food-img"></img>
            <p>Servings: {food.servings}</p>
            <p>Total Calories: {food.calories} kcal</p>
            <button onClick={() => deleteFood(index)}>Delete</button>
          </div>
        );
      })}
    </div>
  );
}

export default FoodBox;
