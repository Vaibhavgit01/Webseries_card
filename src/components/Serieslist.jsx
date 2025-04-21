import React from 'react'

const Serieslist = ({ CurElem }) => {
    // const { CurElem } = props;
    const { id, name, img_url, rating, description, watch_url } = CurElem;
    return (
        
         
            
        <div className="bg-gray-800 rounded-2xl shadow-lg max-w-md w-full p-3 space-y-4"
            key={id}>
            <div className="w-full">
                <img
                    src={img_url}
                    alt="Weseries Image"
                    className="rounded-lg w-full h-60 object-cover"
                />
            </div>
            <div className="space-y-2">
                <h2 className="text-xl font-semibold text-white">Name: {name}</h2>
                <h3 className="text-lg text-yellow-400">Rating: {rating}</h3>
                <p className="text-justify text-gray-300">
                    <strong>Summary:</strong> {description}
                </p>
            </div>
            <a href={watch_url} target="_blank" className="flex justify-end">
                <button className="bg-red-600 hover:bg-red-700 transition px-4 py-2 rounded text-white font-medium ">
                    Watch Now
                </button>
            </a>
        </div>
       

       
    )
}

export default Serieslist