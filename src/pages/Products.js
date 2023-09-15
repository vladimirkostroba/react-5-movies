import React, { useState } from "react";

import { Link,useSearchParams  } from "react-router-dom";
import {getProducts} from '../fakeApi'

export default function Products(){

    const [searchParams, setSearchParams] = useSearchParams();
    const name = searchParams.get('name') ?? '';

    const products = getProducts();
    const visibleProducts = getVisibleProducts();

    
    
    function getVisibleProducts(){
        return(
            products.filter(product => 
                product.name.toLowerCase().includes(name.toLowerCase())))
        
    }

    function updateQueryString(e) {
        if(e.target.value === ''){
            return setSearchParams({})
        }

        setSearchParams({name:e.target.value})
    }

    
    return(
        <div>
            <input 
            type="text"
            value={name}
            onChange={updateQueryString}
            
            />
            <ul>
            {visibleProducts.map(({id,name}) => 
               ( <li key={id}>
                    <Link to={id}>
                    <p>{name}</p>
                    </Link>
                </li>))}
        </ul>
        </div>
    )
}