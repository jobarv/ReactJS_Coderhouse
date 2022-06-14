import React, { useState } from "react";
import { Link } from "react-router-dom";

const ItemCount = () => {
  const stock = 10;
  //  Se establece el inicio del contador en "0"
  const [counter, setCounter] = useState(0);
  // Función Decremento
  const decremento = () => {
    //  Si el contador llega a menos que "0" manda una alerta
    if (counter < 1) {
      alert("Debes solicitar al menos 1 pieza");
    } else {
      // El estado del contador decrementa el conteo
      setCounter(counter - 1);
    }
  };

  // Función Incremento
  const incremento = () => {
    // Si el contador excede el número definido de piezas en stock, manda una alerta
    if (counter >= stock) {
      alert("lo siento, solo tengo " + stock + " piezas");
    } else {
      // El estado del contador incrementa el conteo
      setCounter(counter + 1);
    }
  };

  return (
    <>
      <div className="ItemCount">
      <h5 className="card-title fw-bolder"> {nombre} </h5>
        <img src="" alt="" />
        <div className="counter">{counter}</div>
        <div className="buttons">
          <button className="decremento" onClick={decremento}>
            -
          </button>
          <button className="incremento" onClick={incremento}>
            +
          </button>
        </div>
        <h3>Stock Disponible</h3>
        {stock}
        <Link to={"/producto/" + id } ><button type="button" className="btn card-btn-cart mt-3 btn-sm btn-add">Examinar</button></Link>
      </div>
    </>
  )
}

export default ItemCount;
