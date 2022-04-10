import React from 'react';
import { TextField } from '../components/TextField';

export const HomePage = () => {
  return (
  <div className="border rounded-md">
    <div className="text-3xl font-bold mb-7">List</div>

    <img 
     src="http://source.unsplash.com/random"
     alt=""
     className="w=full h-90 object-cover mb-7"/>

    <div className="text-xl font-bold">Card Title</div>
    <div className="text-ms font-light mb-5">상세설명</div>

    <div>
      <div className="bg-gray-800 text-white text-center py-4">button</div>
      <div className="text-center py-4 text-gray-800 border-gray-800 mt-2">회원가입</div>
    </div>

  </div>);
};
