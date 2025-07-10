import {createContext, useState, useEffect} from 'react';
import axios from 'axios';

export const ProductContext = createContext(); 

export function ProductProvider({children}) {  
    const [products,setProducts] = useState([]);

    useEffect(()=>{
        axios.get('http://localhost:3000/products').then(resp=>setProducts(resp.data)).catch(err=>console.log(err))
    }, []);

    return (
        <ProductContext.Provider value={{products}}>
            {children}
        </ProductContext.Provider>
    )
}