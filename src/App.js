import logo from './logo.svg';
import './App.css';
import foodsJSON from './foods.json';
import FoodBox from './components/FoodBox';
import AddFoodForm from './components/AddFoodForm';
import SearchFood from './components/SearchFood';
import { useState } from 'react';

function App() {
  const [foodList, setFoodList] = useState(foodsJSON);
  const [filteredFoodList, setFilteredFoodList] = useState(foodsJSON);

  const [name, setName] = useState('');
  const [image, setImage] = useState('');
  const [servings, setServings] = useState(1);
  const [calories, setCalories] = useState(1);

  const [searchFood, setSearchedFood] = useState('');

  const updateName = (event) => {
    setName(event.currentTarget.value);
  };

  const updateImage = (event) => {
    setImage(event.currentTarget.value);
  };

  const updateServings = (event) => {
    setServings(event.currentTarget.value);
  };

  const updateCalories = (event) => {
    setCalories(event.currentTarget.value);
  };

  const submitFood = (event) => {
    event.preventDefault();
    const newFoodObj = {
      name,
      image,
      servings,
      calories,
    };

    setFoodList([newFoodObj, ...foodList]);
    setName('');
    setImage('');
    setServings(1);
    setCalories(1);
  };

  const deleteFood = (index) => {
    const foodListCopy = [...foodList];

    foodListCopy.splice(index, 1);

    setFoodList(foodListCopy);
  };

  const searchFoodQuery = (event) => {
    // setSearchedFood(event.currentTarget.value);

    // const foodListCopy = [...foodList];

    // const queriedFoodList = [];

    const newFilteredFoods = foodList.filter((food) => {
      return food.name
        .toLowerCase()
        .includes(event.currentTarget.value.toLowerCase());
    });

    setFilteredFoodList(newFilteredFoods);
    setSearchedFood(event.currentTarget.value);

    // foodListCopy.filter((food) => {
    //   if (searchFood === '') {
    //     setFoodList(foodListCopy);
    //   } else if (food.name.toLowerCase().includes(searchFood.toLowerCase())) {
    //     queriedFoodList.push(food);
    //     setFoodList(queriedFoodList);
    //   }
    // });
  };

  console.log(foodList);
  return (
    <div className="App">
      <AddFoodForm
        name={name}
        image={image}
        servings={servings}
        calories={calories}
        updateName={updateName}
        updateImage={updateImage}
        updateServings={updateServings}
        updateCalories={updateCalories}
        submitFood={submitFood}
      />
      <SearchFood searchFood={searchFood} searchFoodQuery={searchFoodQuery} />
      <div className="foods">
        <FoodBox foodList={filteredFoodList} deleteFood={deleteFood} />
      </div>
    </div>
  );
}

export default App;
