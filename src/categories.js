import { plantList } from "./plantList";
import "./categories.css"
import React, {props, useState} from "react";

function Categories (props){

    const handleCategoryChange = (event) => {
      props.setSelectedCategory(event.target.value);
    };
    const hundleSubmit = () => {

    }

    return(
        <div className="cat-container">
            <select id="categ" name="category"  onChange={handleCategoryChange} value={props.selectedCategory} >
                <option value='All' key='All'>All</option>
            {
                props.categories.map((cat, index) => (
                    <option value={cat} key={index}>{cat}</option>
                ))
            }   
            </select>
            <button onClick={hundleSubmit}>Réinitialiser</button>
        </div>
    );

}

export default Categories;