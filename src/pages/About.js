import React from "react";
import { Link, Outlet } from "react-router-dom";

export default function About(){
    return(
        <div>
            <p>about</p>
            <p>
            Lorem ipsum odor amet, consectetuer adipiscing elit. Ac purus in massa egestas mollis varius;
    dignissim elementum. Mollis tincidunt mattis hendrerit dolor eros enim, nisi ligula ornare.
    Hendrerit parturient habitant pharetra rutrum gravida porttitor eros feugiat. Mollis elit
    sodales taciti duis praesent id. Consequat urna vitae morbi nunc congue.
            </p>

            <ul>
                <li>
                    <Link to="mission">Our mision</Link>
                </li>
                <li>
                    <Link to="rewies">Our rewies</Link>
                </li>
            </ul>
            <Outlet/>
        </div>
    )
}