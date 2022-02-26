import React, { useState } from "react";
import {AddCategory} from "./components/AddCategory";

export const GifExpertApp = () => {

    const [categorias, setCategorias]= useState(['One punch', 'Samurai x', 'Dragon Ball']);
    
    // const handleAdd = () =>{
    //   setCategorias(['HunterXHunter', ...categorias,] );

    
   
    return(
        <>
            <h2>GifExperApp</h2>
            <AddCategory setCategorias={setCategorias}/>
            <hr />

            
            <ol>
                {
                    categorias.map( category => {
                        return <li key={ category }> { category} </li> 
                    })
                }
            </ol>
        </>
    )
}