function AddFoodForm(props) {
  const {
    name,
    image,
    servings,
    calories,
    updateName,
    updateImage,
    updateServings,
    updateCalories,
    submitFood,
  } = props;

  return (
    <div>
      <form>
        <label for="name">Name</label>
        <input type="text" name="text" value={name} onChange={updateName} />

        <label for="image">Image</label>
        <input
          type="text"
          name="image"
          src={image}
          placeholder="https://example.com/food-image.png"
          onChange={updateImage}
        />

        <label for="servings">Servings</label>
        <input
          type="number"
          name="servings"
          value={servings}
          onChange={updateServings}
        />

        <label for="calories">Calories</label>
        <input
          type="number"
          name="calories"
          value={calories}
          onChange={updateCalories}
        />

        <button type="submit" onClick={submitFood}>
          Submit
        </button>
      </form>
    </div>
  );
}

export default AddFoodForm;
