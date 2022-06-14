import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import ItemDetail from "./ItemDetail";


function ItemDetailContainer() {

    const [itemDetail, setItemDetail] = useState({}) 
    const { id } = useParams() 

    useEffect(() => {
        fetch("../../public/playeras.json") 
            .then(res => res.json()) 
            .then(playeras => { setItemDetail(playeras.find(playera => playera.id == id)) }) 
            .catch(error => console.error("Error", error))
        console.log(itemDetail)
    }, [id]); 

    return (
        <>
            <ItemDetail id={itemDetail.id} title={itemDetail.titulo} img={itemDetail.img} detalle={itemDetail.detalle} precio={itemDetail.precio} stock={itemDetail.stock} />
        </>
    );
};

export default ItemDetailContainer;