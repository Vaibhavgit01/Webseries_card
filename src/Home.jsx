import React from 'react'
import Infocard from './components/Infocard.jsx';

const Home = () => {
    return (
        <>
       
        <div style={{ backgroundColor: "#141414" }} className='flex justify-center items-center text-[35px] text-white pt-10'>
        <h1 className='bg-blue-700 p-1 rounded-xl'>List of Best K-Drama Webseries </h1>    
        </div>
        <div className="py-5 p-3 grid grid-cols-4 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4" style={{ backgroundColor: "#141414" }}>
        <Infocard/>
       
        </div>

        </>
    )
}

export default Home;

{/* <div className="bg-gray-800 rounded-2xl shadow-lg max-w-md w-full p-6 space-y-4">
                <div className="w-full flex justify-center">
                    <img
                        src="goldenspoon.jpeg"
                        alt="The Golden Spoon"
                        className="rounded-lg w-full h-60 object-cover"
                    />
                </div>
                <div className="space-y-2">
                    <h2 className="text-xl font-semibold">Name: The Golden Spoon</h2>
                    <h3 className="text-lg text-yellow-400">Rating: 8.2</h3>
                    <p className="text-justify text-gray-300">
                        <strong>Summary:</strong> "The Golden Spoon" is a South Korean drama about a poor high school student,
                        Lee Seung-Cheon, who uses a magical golden spoon to switch lives with his rich friend, Hwang Tae-Yong,
                        hoping for a better life, but soon discovers that money doesn't guarantee happiness.
                    </p>
                </div>
                <div className="flex justify-end">
                    <button className="bg-red-600 hover:bg-red-700 transition px-4 py-2 rounded text-white font-medium">
                        Watch Now
                    </button>
                </div>
            </div>
            <div className="bg-gray-800 rounded-2xl shadow-lg max-w-md w-full p-6 space-y-4">
                <div className="w-full flex justify-center">
                    <img
                        src="goldenspoon.jpeg"
                        alt="The Golden Spoon"
                        className="rounded-lg w-full h-60 object-cover"
                    />
                </div>
                <div className="space-y-2">
                    <h2 className="text-xl font-semibold">Name: The Golden Spoon</h2>
                    <h3 className="text-lg text-yellow-400">Rating: 8.2</h3>
                    <p className="text-justify text-gray-300">
                        <strong>Summary:</strong> "The Golden Spoon" is a South Korean drama about a poor high school student,
                        Lee Seung-Cheon, who uses a magical golden spoon to switch lives with his rich friend, Hwang Tae-Yong,
                        hoping for a better life, but soon discovers that money doesn't guarantee happiness.
                    </p>
                </div>
                <div className="flex justify-end">
                    <button className="bg-red-600 hover:bg-red-700 transition px-4 py-2 rounded text-white font-medium">
                        Watch Now
                    </button>
                </div>
            </div>
            <div className="bg-gray-800 rounded-2xl shadow-lg max-w-md w-full p-6 space-y-4">
                <div className="w-full flex justify-center">
                    <img
                        src="goldenspoon.jpeg"
                        alt="The Golden Spoon"
                        className="rounded-lg w-full h-60 object-cover"
                    />
                </div>
                <div className="space-y-2">
                    <h2 className="text-xl font-semibold">Name: The Golden Spoon</h2>
                    <h3 className="text-lg text-yellow-400">Rating: 8.2</h3>
                    <p className="text-justify text-gray-300">
                        <strong>Summary:</strong> "The Golden Spoon" is a South Korean drama about a poor high school student,
                        Lee Seung-Cheon, who uses a magical golden spoon to switch lives with his rich friend, Hwang Tae-Yong,
                        hoping for a better life, but soon discovers that money doesn't guarantee happiness.
                    </p>
                </div>
                <div className="flex justify-end">
                    <button className="bg-red-600 hover:bg-red-700 transition px-4 py-2 rounded text-white font-medium">
                        Watch Now
                    </button>
                </div>
            </div> */}