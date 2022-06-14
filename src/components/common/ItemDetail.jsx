
const ItemDetail = ({ titulo, detalle, img, stock, precio }) => {
    return (
      <>
  
        <div className="container container-detail">
          <div className="row">
            <div className="col-12 col-sm-6 pt-5">
              <div className="card mb-3 card-style">
                <div className="row g-0">
                  <div className="col-md-4">
                    <img src={img} className="img-fluid img-detail" />
                  </div>
                  <div className="col-md-8 col-sm-6 pt-5">
                    <div className="card-body">
                      <h5 className="card-title card-title-detail">{titulo}</h5>
                      <p className="card-text card-detail mt-3">{detalle}</p>
                      <p className="card-text price-detail">PRECIO: ${precio}</p>
                      <p className="card-text stock-detail">Hay {stock} productos en stock</p>
                      <button type="button" className="btn card-btn-cart d-grid gap-2 col-3 mx-auto mt-5">Agregar al Carrito</button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
  
  
      </>
    );
  };
  
  export default ItemDetail;
  