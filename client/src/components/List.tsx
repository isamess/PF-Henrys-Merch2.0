import './../css/list.css';
import {NavLink, useParams} from "react-router-dom";

interface Props {
    products: Array<{
        id: number,
        nombre: string,
        precio: number,
        descripcion: string,
        imagen: string,
        category: string
    }>,
    cat?: string | undefined
}

//PASO LAS PROPS
const List = ({ products, cat }:Props) => {
    const { category } = useParams();
    if (typeof cat === 'undefined') {
        cat = category;
    }
  return(
    <div className="row row-cols-1 row-cols-sm-2 row-cols-md-3 g-3">
      {
        products.map(product => {
          if (product.category === cat) {
            return(
              <div className="col">
                <div className="card my-card" key={product.id}>
                  <img src={product.imagen} className="card-img-top" alt="..."/>
                  <div className="card-body">
                    <h5 className="card-title">{product.nombre}</h5>
                    <p className="card-text">{product.descripcion}</p>
                    <p className="card-text">${product.precio}</p>
                    <a href="#" className="btn btn-primary">Add+</a>
                    
                    <NavLink 
                      to={`/product/${product.id}`}
                      className="btn btn-secondary"
                    >
                      Ver Producto
                    </NavLink>
                  </div>
                </div>
              </div>
            )
          }        
        })
      }
    </div>
  )
}

export { List };