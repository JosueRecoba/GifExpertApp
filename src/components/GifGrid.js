import React, { useState, useEffect } from "react";
import { GifGridItem } from "./GifGridItem";

export const GifGrid = ({categorias})=> {

     const [images, setImages] = useState([]);

     useEffect( () =>{
         getGifs();
     }, [])

    const getGifs = async() => {


        const url = 'api.giphy.com/v1/gifs/search?limit=10&q=Ric+and+morty&api_key=u99Yw3uHBGP2iRVl4vqvS3x8ER8PtzU5'
        const resp = await fetch( url );
        const { data } = await resp.json();

        const gifs = data.map( img =>{
            return {
                id: img.id,
                title: img.title,
                url: img.images?.downsized_medium.url
            }
        })

        console.log (gifs);
        setImages( gifs); 
    }

    

    return(
        <div>
            <h3> { categorias} </h3>
            
            {
                    images.map( img => (
                        <GifGridItem 
                            key={ img.id }
                            {...img}
                        />
                    ))
            }
           
        </div>
    )
}