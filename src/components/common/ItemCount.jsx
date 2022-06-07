import React, { useState } from "react";

const ItemCount = () => {
    const stock = 10;
    
    //  Se establece el inicio del contador en "0"
    const [counter, setCounter] = useState(0)
    // Función Decremento
    const decremento = () => {
//  Si el contador llega a menos que "0" manda una alerta 

        if ( counter <= 1 ) {
            alert ('1 pieza es el mínimo'); 
            document.getElementsByClassName(decremento).current.disabled = true;

        } else {
            // El estado del contador decrementa el conteo
            setCounter(counter - 1)
        }
    }

    // Función Incremento
    const incremento = () => {
        // Si el contador excede el número definido de piezas en stock, manda una alerta 
        if (counter >= stock ) {

            alert ("lo siento, solo tengo " + stock + " piezas");

        } else {

            // El estado del contador incrementa el conteo
            setCounter(counter + 1)
        }
    }


    return (
        <div className="ItemCount">
            <h2>Playera 1</h2>
            <img src="" alt="" />
            <div className="counter">
                {counter}
            </div>
            <div className="buttons">
                <button className="decremento" onClick={decremento}>-</button>
                <button  className="comprar" onClick={ItemCount}>Comprar</button>
                <button  className="incremento" onClick={incremento}>+</button>
            </div>
            <h3>Stock Disponible</h3>
            {stock}
        </div>
    )
}

export default ItemCount