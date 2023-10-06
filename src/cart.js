import "./cart.css"
import React, {useEffect, useState} from "react";

function Cart (){
    const [prices, setPrices] = useState([]);

    useEffect(() => {
      // Récupérez la liste des prix depuis le localStorage lors du chargement initial
      const storedPrices = JSON.parse(localStorage.getItem("prices")) || [];
      setPrices(storedPrices);
    }, []);
  
    const clearBtn = () => {
      // Effacez le localStorage et réinitialisez la liste des prix
      localStorage.removeItem("prices");
      setPrices([]);
    };

    return(
        <div className="cart-container">
            <div>
                <button className="close-btn">Fermer</button>
            </div>
            
            <h3>Panier</h3>
            <ul>
                {prices.map((price, index) => (
                <li key={index}>{price} $</li>
            ))}
            </ul>
            <p>Total :  ${prices.reduce((total, price) => total + price, 0)}</p>
            <button onClick={clearBtn}>Vider le panier</button>
        </div>
    );
}

export default Cart;