"use client";

import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { useSearchParams } from 'next/navigation';

function EditArticle() {
  const [articleData, setArticleData] = useState(null);
  const searchParams = useSearchParams();
  const id = searchParams.get('id');

  useEffect(() => {
    axios.get(`http://localhost:8080/news/${id}`)
      .then(response => {
          setArticleData(response.data);
      })
      .catch(error => {
          console.error("Error fetching article:", error);
      });
  }, [id]);

  if (!articleData) return <div>Loading...</div>;
  

  return (
    <div className="min-h-screen bg-gray-100">
      <div className="py-6 flex flex-col justify-center sm:py-12">
        <div className="relative sm:max-w-xl sm:mx-auto">
          <div className="absolute inset-0 bg-gradient-to-r from-cyan-400 to-light-blue-500 shadow-lg transform -skew-y-6 sm:skew-y-0 sm:-rotate-6 sm:rounded-3xl"></div>
          <div className="relative px-4 py-10 bg-white shadow-lg sm:rounded-3xl sm:p-20">
            <div className="max-w-md mx-auto">
              <h1 className="text-2xl font-semibold text-black">{articleData.title}</h1>
              <img className="w-full h-64 object-cover mt-4" src={`http://localhost:8080/uploads/${articleData.imageUrl}`} alt={articleData.title} />
              <p className="text-base leading-6 text-gray-500 mt-4">{articleData.content}</p>
             
              <p className="text-base leading-6 text-gray-500 mt-4">Author: {articleData.author}</p>

            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default EditArticle;

