import React, { lazy } from "react";
import { useFetchGifs } from "../hooks/useFetchGifs";
//import { getGifs } from "../helpers/getGifs";
//import { GifGridItem } from "./GifGridItem";

export const GifGrid = ({categorias})=> {

     //const [images, setImages] = useState([]);
     const {loading} = useFetchGifs();
     
    
     //useEffect( () =>{
       //  getGifs(categorias)
         //.then(setImages); 
     //}, [categorias])

    

    

    return(
        <>
        
        <h3> {categorias} </h3>
        { loading ? 'cargando...': 'Data cargada'}
        {/* <div className="card-grid">

            {
                    images.map( img => (
                        <GifGridItem 
                            key={ img.id }
                            {...img}
                        />
                    ))
            }
           
        </div> */}

        </>
        
    )
}