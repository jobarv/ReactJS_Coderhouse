import { useEffect, useState } from "react";
import ItemDetail from "./ItemDetail";

const getItems = new Promise((res) => {
    setTimeout(() => {
        res([
            {
                "id": "00",
                "titulo": "The Misftis",
                "img": "https://images.backstreetmerch.com/images/products/bands/clothing/misf/bsi_misf491.jpg",
                "detalle": "Clásica playera The Misftis, sé parte del fiend club y demuestra tu linaje horror punk.",
                "precio": 450,
                "stock": 21,
            }
        ]);
    }, 2000);
});

const ItemDeteailContainer = () => {
    const [itemDetail, setItemDetail] = useState();

    useEffect(() => {
        getItems.then((res) => {
            setItemDetail(res[0]);
        });
    }, []);
    return (
        <>
            {itemDetail === undefined ? (
                <p>loading</p>
            ) : (
                <ItemDetail id={itemDetail.id} titulo={itemDetail.titulo} img={itemDetail.img} detalle={itemDetail.detalle} precio={itemDetail.precio} stock={itemDetail.stock} />
            )}
        </>
    );
};

export default ItemDeteailContainer;