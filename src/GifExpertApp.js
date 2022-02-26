import React, { useState } from "react";

export const GifExpertApp = () => {
    //const categorias = ['One punch', 'Samurai x', 'Dragon Ball'];
    const [categorias, setCategorias]= useState(['One punch', 'Samurai x', 'Dragon Ball']);
    
    const handleAdd = () =>{
        setCategorias(['HunterXHunter', ...categorias,] );

    }

    return(
        <>
            <h2>GifExperApp</h2>
            <hr />

            <button onClick={handleAdd}>Agregar</button>
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