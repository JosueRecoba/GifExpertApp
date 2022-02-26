import React, { useState } from "react";
import {AddCategory} from "./components/AddCategory";
import { GifGrid } from "./components/GifGrid";


export const GifExpertApp = () => {

    const [categorias, setCategorias]= useState(['Dragon Ball']);
   
    return(
        <>
            <h2>GifExperApp</h2>
            <AddCategory setCategorias={setCategorias}/>
            <hr />

            
            <ol>
                {
                    categorias.map( Category => (
                    <GifGrid 
                        key={Category}
                        categorias={Category}/>
                    ))
                }
            </ol>
        </>
    )
}