import React from 'react';
import { TextField } from '../components/TextField';

export const HomePage = () => {
  return (
  <div className="m-4">
    <div className="text 3xl font=bold mb-10">List</div>

    <div>
      <TextField label="Card Title" placeholder="Hi, User Name Happy."/>
    </div>

    <div>
      <div className="bg-gray-800 text-white text-center py-4">button</div>
      <div className="text-center py-4 text-gray-800 border-gray-800 mt-2">회원가입</div>
    </div>

  </div>);
};
