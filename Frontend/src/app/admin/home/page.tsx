"use client";

import axios from "axios";
import { useEffect, useState } from "react";

export default function DashboardHome() {

    const [newsData, setNewsData] = useState([]);

    useEffect(() => {
        axios.get('http://localhost:8080/news')
            .then(response => {
                setNewsData(response.data);
            })
            .catch(error => {
                console.error("Error fetching news data:", error);
            });
    }, []);


    function deleteArticle(id) {
        fetch(`http://localhost:8080/news/${id}`, {
          method: 'DELETE',
        })
        .then(response => response.json())
        .then(data => {
          console.log("Article deleted:", data);
          window.location.reload();

        })
        .catch((error) => {
          console.error("Error deleting article:", error);
        });
      }
      






    return (
        <div className="min-h-screen bg-gray-100">

            
            <nav className="bg-white p-4 shadow-md">
                <div className="container mx-auto flex justify-between items-center">
                    <a href="#" className="text-xl font-bold">Your Brand</a>
                    <div>
                        <a href="home" className="mr-4 text-gray-700 hover:text-gray-900">Dashboard Home</a>
                        <a href="/" className="text-gray-700 hover:text-gray-900">Logout</a>
                    </div>
                </div>
            </nav>

          
            <div className="py-6 flex flex-col justify-center sm:py-12">
    <div className="relative sm:max-w-2xl sm:mx-auto">
        <div className="absolute inset-0 bg-gradient-to-r from-cyan-400 to-light-blue-500 shadow-lg transform -skew-y-6 sm:skew-y-0 sm:-rotate-6 sm:rounded-3xl"></div>
        <div className="relative px-4 py-10 bg-white shadow-lg sm:rounded-3xl sm:p-20">
            <div className="max-w-xl mx-auto space-y-6">
                <div className="flex justify-between">
                    <h1 className="text-2xl font-semibold mb-4 text-black">Dashboard <br></br></h1>
                    <a href="create" className="bg-indigo-600 text-white px-4 py-2 rounded-md hover:bg-indigo-700 mr-2.5">Create New Article</a>
                </div>
                {newsData.map(article => (
                    <div key={article.id} className="border p-4 rounded-md space-y-4">
                        <h2 className="text-xl leading-7 text-gray-900 font-bold">{article.title}</h2>
                        <p className="text-base leading-6 text-gray-500">{article.description}</p>
                        <div className="flex justify-end space-x-4">
                            <a href={`/article/${article.id}`} className="text-indigo-600 hover:text-indigo-800">See</a>
                            <a href={`/edit?id=${article.id}`} className="text-indigo-600 hover:text-indigo-800">Edit</a>
                            <button onClick={() => deleteArticle(article.id)} className="text-red-600 hover:text-red-800">Delete</button>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    </div>
</div>

        </div>
    );
}
