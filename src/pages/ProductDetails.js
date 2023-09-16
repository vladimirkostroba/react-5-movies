import React , {useRef} from "react";
import { useParams,useLocation, Link,Outlet} from "react-router-dom";
import { getProductById } from "../fakeApi";


export default function ProductDetails(){
    const {id} = useParams();
    const product = getProductById(id);
    const location = useLocation();
    const backLinkLocation = useRef(location.state?.from ?? '/products');

    console.log(backLinkLocation.current);

    return(
        <main>
            <Link to={backLinkLocation.current}>Назад к колекции</Link>
            <h2>{product.name}</h2>
            <p>
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Doloribus
          sunt excepturi nesciunt iusto dignissimos assumenda ab quae cupiditate
          a, sed reprehenderit? Deleniti optio quasi, amet natus reiciendis
          atque fuga dolore? Lorem, ipsum dolor sit amet consectetur adipisicing
          elit. Impedit suscipit quisquam incidunt commodi fugiat aliquam
          praesentium ipsum quos unde voluptatum?
            </p>

            <ul>
                <li>
                    <Link to='gallery'>Gallery</Link>
                </li>
            </ul>
            <Outlet/>
        </main>
    )
   
}