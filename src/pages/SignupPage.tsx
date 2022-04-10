import React from 'react';
import { TextField } from '../components/TextField';

export const SignupPage = () => {
  return (
  <div className="m-4">
    <div className="text-3xl text-bold mb-10">회원가입</div>

    <div>
     <TextField label="타이틀" placeholder="내용을 입력해주세요."/>
     <TextField label="타이틀" placeholder="내용을 입력해주세요."/>
     <TextField label="타이틀" placeholder="내용을 입력해주세요."/>
     <TextField label="타이틀" placeholder="내용을 입력해주세요."/>
    </div>

    <div>
      <div className="text-center py-4 text-white border-gray-800">회원가입</div>
    </div>

  </div>);
}