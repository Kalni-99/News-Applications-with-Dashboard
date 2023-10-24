"use client";

import { useState, useEffect } from 'react';
import { useSearchParams } from 'next/navigation'; 
import axios from 'axios';
import { useRouter } from 'next/router'; 

export default function EditArticle() {



    const searchParams = useSearchParams();
    const articleId = searchParams.get('id');






    const [articleData, setArticleData] = useState(null);

    useEffect(() => {
        if (articleId) {
            axios.get(`http://localhost:8080/news/${articleId}`)
            .then(response => {
                setArticleData(response.data);
            })
            .catch(error => {
                console.error("Error fetching article:", error);
            });
        }
    }, [articleId]);

    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setArticleData(prevState => ({ ...prevState, [name]: value }));
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            const payload = {
                ...articleData,
                id: articleId
            };
    
            const response = await axios.put(`http://localhost:8080/news/${articleId}`, payload);
            
            if (response.status === 200) {
                alert('Article updated successfully!');
            } else {
                alert('Error updating the article.');
            }
        } catch (error) {
            console.error("Error updating article:", error);
            alert('An error occurred while updating the article.');
        }
    };
    

    if (!articleData) return <div>Loading...</div>;

    return (
        
<div>

<nav className="bg-white p-4 shadow-md">
                <div className="container mx-auto flex justify-between items-center">
                    <a href="#" className="text-xl font-bold">Your Brand</a>
                    <div>
                        <a href="admin/home" className="mr-4 text-gray-700 hover:text-gray-900">Dashboard Home</a>
                        <a href="/" className="text-gray-700 hover:text-gray-900">Logout</a>
                    </div>
                </div>
            </nav>






        <div className="py-6 flex flex-col justify-center sm:py-12 bg-white">
            <div className="relative sm:max-w-2xl sm:mx-auto">
                <div className="absolute inset-0 bg-gradient-to-r from-cyan-400 to-light-blue-500 shadow-lg transform -skew-y-6 sm:skew-y-0 sm:-rotate-6 sm:rounded-3xl"></div>
                <div className="relative px-4 py-10 bg-white shadow-lg sm:rounded-3xl sm:p-20">
                    <div className="max-w-xl mx-auto space-y-6">
                        <div className="flex justify-between">
                            <h1 className="text-2xl font-semibold mb-4">Edit Article</h1>
                        </div>
                        <form onSubmit={handleSubmit} className="space-y-4">
                            <div>
                                <label htmlFor="title" className="block text-sm font-medium text-gray-700">Title</label>
                                <input id="title" name="title" type="text" required value={articleData.title} onChange={handleInputChange} className="mt-1 p-2 w-full border rounded-md text-black" />
                            </div>
                            <div>
                                <label htmlFor="author" className="block text-sm font-medium text-gray-700">Author</label>
                                <input id="author" name="author" type="text" required value={articleData.author} onChange={handleInputChange} className="mt-1 p-2 w-full border rounded-md text-black"/>
                            </div>
                            <div>
                                <label htmlFor="description" className="block text-sm font-medium text-gray-700">Description</label>
                                <textarea id="description" name="description" rows="3" required value={articleData.description} onChange={handleInputChange} className="mt-1 p-2 w-full border rounded-md text-black"></textarea>
                            </div>
                            <div>
                                <label htmlFor="content" className="block text-sm font-medium text-gray-700">Content</label>
                                <textarea id="content" name="content" rows="5" required value={articleData.content} onChange={handleInputChange} className="mt-1 p-2 w-full border rounded-md text-black"></textarea>
                            </div>
                            <div>
                                <input id="image" name="image" type="hidden" className="mt-1 p-2 w-full border rounded-md text-black"/>
                            </div>
                            <div>
                                <button type="submit" className="bg-indigo-600 text-white px-4 py-2 rounded-md hover:bg-indigo-700 mt-4">Update</button>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </div>
        </div>
    );
    
}
