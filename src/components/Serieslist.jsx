import React from 'react'

const Serieslist = ({ CurElem }) => {
    // const { CurElem } = props;
    const { id, name, img_url, rating, description, watch_url } = CurElem;
    return (
        
         
            
        <div className="bg-gray-800 rounded-2xl shadow-lg max-w-md w-full p-3.5 space-y-4 hover:scale-106"
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
                <h3 className="text-lg text-yellow-400"> Rating: <span className={rating >= 8.5 ? "bg-[#e12b6a] text-[#fff] rounded-[40px] px-4.5 py-1.5 ml-[1.2rem] text-xl" :"bg-cyan-100 text-blue-600 rounded-[40px] px-4.5 py-1.5 ml-[1.2rem] text-xl"}>{rating} </span></h3>
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