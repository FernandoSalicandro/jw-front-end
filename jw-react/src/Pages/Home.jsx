import { useContext } from 'react';
import  {ProductContext}  from '../Context/ProductContext';

export default function Home() {
    const { products } = useContext(ProductContext);
    return (
        <>
            <main>
                <img src="\img\heroFullscreen.png" alt="" className=" mb-5 hero-img" />
                <div className="wrapper d-flex justify-content-between align-items-center p-3">
                    <div className="left-col-noScrolled"></div>
                    <h1 className="text-center home-carousel mt-3">JW FOR ...</h1>
                    <div className="left-col-noScrolled"></div>
                </div>

                <div className="container">
                    <div className="row row-cols-1 row-cols-md-2 row-cols-lg-3">
                        {products && products.map(curProduct => (
                            <div className="col mt-3" key={curProduct._id}>
                                <div className="card">
                                    <div className="card-header">{curProduct.name}</div>
                                    <img src={curProduct.image_url} alt="" />
                                    <div className="card-body"><p>{curProduct.description}</p></div>
                                </div>
                            </div>

                        )
                        )}

                    </div>
                </div>
            </main>
        </>
    )
}