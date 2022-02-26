import React, { useState, useEffect, Fragment } from "react";
import { getGifs } from "../helpers/getGifs";
import { GifGridItem } from "./GifGridItem";

export const GifGrid = ({categorias})=> {

     const [images, setImages] = useState([]);

     useEffect( () =>{
         getGifs(categorias)
         .then(setImages); 
     }, [categorias])

    

    

    return(
        <>
        
        <h3> {categorias} </h3>
        <div className="card-grid">

            {
                    images.map( img => (
                        <GifGridItem 
                            key={ img.id }
                            {...img}
                        />
                    ))
            }
           
        </div>

        </>
        
    )
}