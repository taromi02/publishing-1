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

    <div>
      <div className="text-2xl font-bold mb-4">Today's EWHA</div>
      <div>
        <img src="http://source.unsplash.com/random" 
             alt="" 
             className="w-full h-30 object-cover rounded-2xl flex justify-start"
        />
        <div className="text-xl font-bold mb-2">오늘의 이화</div>
        <div className="text-xs font-normal mb-2">오늘 하루의 이화를 담은 사진 한 컷!</div>
        <div className="text-xs font-light mb-10">서울특별시 서대문구 이화여대길 52</div>
      </div>
      
      <div>
        <img src="http://source.unsplash.com/random" 
             alt="" 
             className="w-full h-70 object-cover rounded-2xl flex items-center"
        />
        <div className="text-xl font-bold mb-2">이화여대의 아름다운 새벽녘</div>
        <div className="text-xs font-normal mb-2">이화여대에서 오늘 하루의 해가 떠오르고 있다.</div>
        <div className="text-xs font-light mb-2">A.M.5:32</div>
      </div>

      <div>
        <div className="bg-green-800 rounded-md text-white text-center py-2.5 px-4">
              더 많은 사진 보러 가기
        </div>
      </div>
   </div>

  </div>);
}
