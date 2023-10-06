
import './App.css';
import Banner from './banner';
import PlantItem from './plantItem';
import Categories from './categories';
import Cart from './cart';
import Footer from './footer';
import { plantList } from './plantList';
import ShoppingList from './shoppingList';
import React, {useState} from 'react';

function App() {
  const [selectedCategory, setSelectedCategory] = useState('All');
  const categories = plantList.reduce(
    (acc, plant) => 
        acc.includes(plant.category) ? acc : acc.concat(plant.category),
        []
    )

  return (
    <div className="App">
      <Banner />
      <div className='components-container'>
          <div>
            <Cart />
          </div>
          <div >
            <Categories categories={categories} selectedCategory={selectedCategory} setSelectedCategory={setSelectedCategory}/>
            <ShoppingList selectedCategory={selectedCategory} setSelectedCategory={setSelectedCategory}/> 
          </div>
      </div>
      <Footer />
    </div>
  );
}

export default App;
