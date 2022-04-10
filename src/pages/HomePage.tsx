import React from 'react';
import { TextField } from '../components/TextField';

export const HomePage = () => {
  return (
  <div className="m-4">
    <div>
      <div>New</div>
      <div></div>
    </div>


  <div>
    <div className="text-3xl font-bold mb-7">List</div>
    
    <div className="border p-4">
      <div>
        <div className="h-48 bg-gray-100"></div>
        <div className="mt-4">
          <div className="text-lg font-semibold">Card title</div>
          <div className="text-gray-500">
            Sed vel turpis adipiscing penatibus orci meque.
          </div>
      </div>
    
    
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
}
