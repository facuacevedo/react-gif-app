import React, { useState } from "react";
import { AddCategory } from "./Components/AddCategory";
import { GifGrid } from "./Components/GifGrid";
export const GifExpertApp = () => {
    // SI NO LE PASAMOS UN ARGUMENTO A USESTATE, QUEDARA COMO UNDEFINED
    // Y NOS DARA UN ERROR, PARA EVITAR ESO SI QUEREMOS QUE RECIBA UN STRING, LE PASAMOS UN STRING VACIO ''
    const [ categories, setCategories] = useState(["Goku"]);

    return(
        <>
            <h2>
                Gif Expert App
            </h2>
            <AddCategory setCategories={ setCategories } />
            <hr />

            { categories.map( personaje => 
                <GifGrid key={ personaje } category={ personaje }/> )
                }
        </>
    )
}