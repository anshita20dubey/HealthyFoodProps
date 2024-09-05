import React from 'react'
import './App.css'
import 'bootstrap/dist/css/bootstrap.min.css'
import FoodItems from './components/FoodItems';
import ErrorMessage from './components/ErrorMessage';

const App = () => {
  const foodItems = ['dal', 'ghee', 'roti', 'green vegetables', 'salad', 'milk'];

  return (
    <>
      <h1 className='food-heading'>Healthy Food List</h1>
      <ErrorMessage items={foodItems} />
      <FoodItems items={foodItems} />
    </>
  )
}

export default App