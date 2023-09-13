import React from "react";
import { useParams } from "react-router-dom";
import { getProductById } from "../fakeApi";


export default function ProductDetails(){
    const {id} = useParams();
    
    const product = getProductById(id)
    

    console.log(useParams());

    return(
        <main>
            <h2>{product.name}</h2>
            <p>
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Doloribus
          sunt excepturi nesciunt iusto dignissimos assumenda ab quae cupiditate
          a, sed reprehenderit? Deleniti optio quasi, amet natus reiciendis
          atque fuga dolore? Lorem, ipsum dolor sit amet consectetur adipisicing
          elit. Impedit suscipit quisquam incidunt commodi fugiat aliquam
          praesentium ipsum quos unde voluptatum?
            </p>
        </main>
    )
   
}