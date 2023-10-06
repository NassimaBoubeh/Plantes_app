import { plantList } from "./plantList";
import React, { props } from 'react';
import PlantItem from './plantItem';
import  "./plantItem.css"


function ShoppingList (props){
    const filteredPlants = props.selectedCategory === 'All'
    ? plantList
    : plantList.filter(plant => plant.category === props.selectedCategory);
    
    return (
        <div >
                <ul className="no-bullets">
                
                {filteredPlants.map((plant)=> (
                        <li key={plant.id}>
                            <PlantItem plante={plant}/>
                        </li>
                ))}
            </ul>
           
        </div>
    );
}

export default ShoppingList;
