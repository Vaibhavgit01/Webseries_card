import React from 'react'
import sericesdata from "../api/seriesdata.json";
import Serieslist from './Serieslist';
const Infocard = () => {
    return (


        <>
            {sericesdata.map((CurElem) => {
                return (
                   <Serieslist key={CurElem.id} CurElem={CurElem}/> 
                    
                );
            })}
        </>
    )


}


export default Infocard