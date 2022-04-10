import React from 'react';
import { TextField } from '../components/TextField';

export const HomePage = () => {
  return (
  <div className="m-4 space-y-10">
    <div className="space-y-4">
      <div className="text-2xl font-bold">New</div>
      <div>
        <img src="http://source.unsplash.com/random" 
             alt="" 
             className="w-full h-72 object-cover rounded-2xl"
        />
      </div>
    </div>

    <div className="space-y-4">
      <div className="text-2xl font-bold">Category</div>

      <div className="flex space-x-6">
        <div>
          <img src="http://source.unsplash.com/random" 
               alt="" 
               className="w-20 h-20 object-cover rounded-full"
          />
          <div className="text-center">일식</div>
        </div>

        <div>
          <img src="http://source.unsplash.com/random" 
               alt="" 
               className="w-20 h-20 object-cover rounded-full"
          />
          <div className="text-center">중식</div>
        </div>

        <div>
          <img src="http://source.unsplash.com/random" 
               alt="" 
               className="w-20 h-20 object-cover rounded-full"
          />
          <div className="text-center">한식</div>
        </div>

        <div>
          <img src="http://source.unsplash.com/random" 
               alt="" 
               className="w-20 h-20 object-cover rounded-full"
          />
          <div className="text-center">양식</div>
        </div>

      </div>
    </div>


  <div>
    <div className="text-2xl font-bold mb-4">List</div>
    
    <div className="border p-4 rounded-md">
      <div>
        <img 
           src="http://source.unsplash.com/random" 
           alt="" 
           className="w=full h-60 object-cover rounded-2xl" 
        />
        <div className="mt-4">
          <div className="text-lg font-semibold">Card title</div>
          <div className="text-gray-500">
            Sed vel turpis adipiscing penatibus orci meque. Erat sed
            fermentum upsum vel quis quam. Nunc etiam dui tortor, non
            aliquam lacinia tempor.
          </div>
          <div className="mt-4 flex justify-end space-x-3">
            <div className="bg-gray-800 rounded-md text-white text-center py-2.5 px-4">
              Button
            </div>
            <div className="bg-gray-800 rounded-md text-white text-center py-2.5 px-4">
              Button
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>);
};
