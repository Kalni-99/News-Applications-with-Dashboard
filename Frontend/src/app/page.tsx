"use client";

import { useEffect, useState } from 'react';
import axios from 'axios';

export default function Home() {

  const [newsData, setNewsData] = useState([]);


  useEffect(() => {
    axios.get('http://localhost:8080/news') 
         .then(response => {
             setNewsData(response.data);
         })
         .catch(error => {
             console.error("Error fetching data:", error);
         });
}, []); 








  
    return (
        <div className="min-h-screen bg-gray-100">
          
            <nav className="bg-white p-4 shadow-md">
                <div className="container mx-auto">
                    <a href="#" className="text-xl font-bold">Your Brand</a>
                    <div className="float-right">
                        <a href="#" className="mr-4 text-gray-700 hover:text-gray-900">Home</a>
                        <a href="#" className="text-gray-700 hover:text-gray-900">Admin Login</a>
                    </div>
                </div>
            </nav>
            
            
            <div className="py-6 flex flex-col justify-center sm:py-12">
            <div className="relative sm:max-w-xl sm:mx-auto">
                <div className="absolute inset-0 bg-gradient-to-r from-cyan-400 to-light-blue-500 shadow-lg transform -skew-y-6 sm:skew-y-0 sm:-rotate-6 sm:rounded-3xl"></div>
                <div className="relative px-4 py-10 bg-white shadow-lg sm:rounded-3xl sm:p-20">
                    <div className="max-w-md mx-auto">
                        <h1 className="text-2xl font-semibold text-black">News Articles</h1>
                        <div className="divide-y divide-gray-200 grid grid-cols-1 md:grid-cols-2 gap-4">
                            {newsData.map(article => (
                                <div key={article.id} className="pt-6 pb-8 space-y-2 md:space-y-5">
                                    <h2 className="text-xl leading-7 text-gray-900 font-bold">{article.title}</h2>
                                    <p className="text-base leading-6 text-gray-500">{article.description}</p>
                                 
                                    <a href={`article?id=${article.id}`} target="_blank" rel="noopener noreferrer">
                                        <img className="w-full h-64 object-cover mt-4" src={`http://localhost:8080/uploads/${article.imageUrl}`} alt={article.title} />
                                    </a>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
);
}
