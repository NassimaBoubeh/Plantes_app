import { plantList } from "./plantList";
import CareScale from "./careScale";
import React, { useState, props, useEffect } from 'react';
import  "./plantItem.css"


function PlantItem (props){
    
    const { plante, onAddPrice } = props;

    const hundleSubmit = () => {
    // Récupérez la liste actuelle des prix depuis le localStorage
    const existingPrices = JSON.parse(localStorage.getItem("prices")) || [];
    
    // Ajoutez le nouveau prix
    existingPrices.push(plante.price);
    localStorage.clear();

    // Mettez à jour le localStorage avec la nouvelle liste de prix
    localStorage.setItem("prices", JSON.stringify(existingPrices));

  };
    return (
        <div >
                <ul className="no-bullets">
                        <li key={props.plante.id} >
                            <img className="no-space" key={props.plante.id} src={props.plante.cover} alt={props.plante.name} height={200} width={150}/>
                            <h6 className="no-space">{props.plante.name}</h6>
                            <h6 className="no-space">{props.plante.category}</h6>
                             <div className="no-space">
                                {Array.from({ length: props.plante.water }).map((_, index) => (
                                <CareScale key={index} typeC='water' />
                                ))}
                            </div>
                            <div className="no-space">
                                 {Array.from({ length: props.plante.light }).map((_, index) => (
                                <CareScale key={index} typeC='sun'/>
                                ))}
                            </div>
                            <h6 className="no-space">price : {props.plante.price} $</h6>
                            <button onClick={hundleSubmit} className="no-space" >Ajouter</button>
                        </li>
            </ul>
           
        </div>
    );
}

export default PlantItem;