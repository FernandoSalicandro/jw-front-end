import { useContext } from 'react';
import { ProductContext } from '../Context/ProductContext';

export default function Prodotti() {

    const { products } = useContext(ProductContext);


    return (
        <>
            <h1 className="text-center my-5">Consulta tutti i nostro prodotti</h1>
            <div className="container">
                <div className="row row-cols-1 row-cols-md-2 row-cols-lg-3 g-2">
                    {products.map(curProduct => (
                        <div className="col" key={curProduct.id}>
                            <div className="card">
                                <div className="card-header">{curProduct.name}</div>
                                <div className="card-body">
                                    <p>{curProduct.description}</p>
                                    <span>{curProduct.price}</span>
                                </div>

                            </div>
                        </div>
                    ))}


                </div>
            </div>
        </>
    )
}

