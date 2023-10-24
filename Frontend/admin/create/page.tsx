// pages/admin/create.tsx
"use client";
// pages/uploadNews.js
import { useState } from 'react';
import axios from 'axios';

export default function UploadNews() {
  const [formData, setFormData] = useState({
    title: '',
    author: '',
    content: '',
    description: '',
    image: null,
  });

  const handleChange = (e) => {
    const name = e.target.name;
    const value = e.target.value;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleImageChange = (e) => {
    setFormData((prevData) => ({
      ...prevData,
      image: e.target.files[0],
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const formDataObj = new FormData();
    for (let key in formData) {
      formDataObj.append(key, formData[key]);
    }
  
    try {
      const response = await fetch('http://localhost:8080', {
        method: 'POST',
        body: formDataObj,
      });
  
      if (response.ok) {
        alert('News uploaded successfully');
      } else {
        const data = await response.json();
        alert(data.message || 'Error uploading news');
      }
    } catch (error) {
      alert('Network error or server not responding.');
    }
  };
  

  return (
    <div className="py-6 flex flex-col justify-center sm:py-12 bg-white">
        <div className="relative sm:max-w-2xl sm:mx-auto">
            <div className="absolute inset-0 bg-gradient-to-r from-cyan-400 to-light-blue-500 shadow-lg transform -skew-y-6 sm:skew-y-0 sm:-rotate-6 sm:rounded-3xl"></div>
            <div className="relative px-4 py-10 bg-white shadow-lg sm:rounded-3xl sm:p-20">
                <div className="max-w-xl mx-auto space-y-6">
                    <div className="flex justify-between">
                        <h1 className="text-2xl font-semibold mb-4">Upload News</h1>
                    </div>
                    <form onSubmit={handleSubmit} className="space-y-4">
                        <div>
                            <label htmlFor="title" className="block text-sm font-medium text-gray-700">Title</label>
                            <input id="title" name="title" type="text" required value={formData.title} onChange={handleChange} className="mt-1 p-2 w-full border rounded-md text-black" />
                        </div>
                        <div>
                            <label htmlFor="author" className="block text-sm font-medium text-gray-700">Author</label>
                            <input id="author" name="author" type="text" required value={formData.author} onChange={handleChange} className="mt-1 p-2 w-full border rounded-md text-black"/>
                        </div>
                        <div>
                            <label htmlFor="description" className="block text-sm font-medium text-gray-700">Description</label>
                            <textarea id="description" name="description" rows="3" required value={formData.description} onChange={handleChange} className="mt-1 p-2 w-full border rounded-md text-black"></textarea>
                        </div>
                        <div>
                            <label htmlFor="content" className="block text-sm font-medium text-gray-700">Content</label>
                            <textarea id="content" name="content" rows="5" required value={formData.content} onChange={handleChange} className="mt-1 p-2 w-full border rounded-md text-black"></textarea>
                        </div>
                        <div>
                            <label htmlFor="image" className="block text-sm font-medium text-gray-700">Upload Image</label>
                            <input id="image" name="image" type="file" onChange={handleImageChange} className="mt-1 p-2 w-full border rounded-md text-black"/>
                        </div>
                        <div>
                            <button type="submit" className="bg-indigo-600 text-white px-4 py-2 rounded-md hover:bg-indigo-700 mt-4">Submit</button>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    </div>
);

}