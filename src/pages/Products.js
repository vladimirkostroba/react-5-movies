import React from "react";
import { Link } from "react-router-dom";
import {getProducts} from '../fakeApi'

export default function Products(){
    const products = getProducts();
    return(
        <ul>
            {products.map(({id,name}) => 
               ( <li key={id}>
                    <Link to={id}>
                    <p>{name}</p>
                    </Link>
                </li>))}
        </ul>
    )
}