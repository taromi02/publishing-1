import React from 'react';
import { TextField } from '../components/TextField';

export const HomePage = () => {
  return (
  <><div className="m-4 space-y-10">
      <div className="space-y-4">
        <div className="text-2xl font-bold">New</div>
        <div>
          <img src="https://media.istockphoto.com/photos/happy-waiter-serving-food-to-group-of-friends-in-a-pub-picture-id1307190527?b=1&k=20&m=1307190527&s=170667a&w=0&h=_GZiHqd9mIhvg_tMT-VwIGlPDeZUY6zUorx5XvQM358="
            alt=""
            className="w-full h-72 object-cover rounded-2xl" />
        </div>
      </div>
    </div><div className="m-4 space-y-4">
        <div className="text-2xl font-bold">Category</div>

        <div className="flex space-x-6">
          <div>
            <img src="https://media.istockphoto.com/photos/woman-taking-tasty-sushi-roll-with-salmon-from-set-at-table-closeup-picture-id1320922361?b=1&k=20&m=1320922361&s=170667a&w=0&h=SMk-4A6nluTBeZKFeQzGTAA_W7CFoboN6HLPBawQ78Q="
              alt=""
              className="w-20 h-20 object-cover rounded-full" />
            <div className="text-center">일식</div>
          </div>

          <div>
            <img src="https://media.istockphoto.com/photos/jajangmyeon-korean-noodle-picture-id1372678640?b=1&k=20&m=1372678640&s=170667a&w=0&h=Oiayw4KJ-ceFS55Ch0hmibITmm9KyFdlUo58iYwOCw0="
              alt=""
              className="w-20 h-20 object-cover rounded-full" />
            <div className="text-center">중식</div>
          </div>

          <div>
            <img src="https://media.istockphoto.com/photos/kimchi-fried-rice-korean-food-picture-id1189472743?b=1&k=20&m=1189472743&s=170667a&w=0&h=fLznu2WaUAXIFRontzHce3XRC2qx8kyAHYw-NCZ288w="
              alt=""
              className="w-20 h-20 object-cover rounded-full" />
            <div className="text-center">한식</div>
          </div>

          <div>
            <img src="https://media.istockphoto.com/photos/spaghetti-alla-puttanesca-italian-pasta-dish-with-tomatoes-black-picture-id1325172440?b=1&k=20&m=1325172440&s=170667a&w=0&h=WS2gPeU01_yzJYsiaHBhOSfrHVKMn-kBxzgsz61a2p8="
              alt=""
              className="w-20 h-20 object-cover rounded-full" />
            <div className="text-center">양식</div>
          </div>

        </div>
      </div><div>
        <div className="m-4 text-2xl font-bold mb-4">오늘의 책 한 구절</div>

        <div className="border p-4 rounded-md">
          <div>
            <img
              src="https://media.istockphoto.com/photos/beautiful-abyssinian-cat-on-sofa-at-home-lovely-pet-picture-id1351444189?b=1&k=20&m=1351444189&s=170667a&w=0&h=8xBiTnX10i09ltU_hGK8JNQEeTasmoAh5T6dUQM1XDU="
              alt=""
              className="w=full h-60 object-cover rounded-2xl" />
            <div className="mt-4">
              <div className="text-lg font-semibold">고양이처럼</div>
              <div className="text-gray-500">
                "인생을 바꾸고 싶다면 먼저 철저하게 '지금'에만 집중해봅시다.
                과거를 후회한다던가 미래를 걱정하지 말고요.
                '지금-지금-지금'으로 쭉 이어지는 움직임이야말로 미래라고 생각해야 합니다."
              </div>
              <div className="mt-4 flex justify-end space-x-3">
                <div className="bg-sky-800 rounded-md text-white text-center py-2.5 px-4">
                  '고양이처럼'
                </div>
                <div className="bg-violet-800 rounded-md text-white text-center py-2.5 px-4">
                  더 많은 구절 보러 가기
                </div>
              </div>
            </div>
          </div>
        </div>

        <div>
          <div className="m-4 text-2xl font-bold mb-4">Today's EWHA</div>
          <div>
            <img src="https://media.istockphoto.com/photos/ewha-womans-university-with-cherry-blossom-seoul-south-korea-picture-id1170202603?b=1&k=20&m=1170202603&s=170667a&w=0&h=HxCD670_O50Tli2WVfTdAFs-lbnHU_uby3tx6WqKL_M="
              alt=""
              className="w-full h-30 object-cover rounded-2xl flex justify-start" />
            <div className="m-4 text-xl font-bold mb-2">오늘의 이화</div>
            <div className="m-4 text-xs font-semibold mb-2">오늘 하루의 이화를 담은 사진 한 컷!</div>
            <div className="m-4 text-xs font-light mb-10">이화여대에 봄이 오고 있다.</div>
          </div>

          <div>
            <img src="https://media.istockphoto.com/photos/old-big-building-in-the-ewha-womans-university-picture-id1353713325?b=1&k=20&m=1353713325&s=170667a&w=0&h=K7UDJT8JMENYOjxiZ15HeE3xOmqJSgziGrp6Q6JLkhM="
              alt=""
              className="w-full h-70 object-cover rounded-2xl flex items-center" />
            <div className="m-4 text-xl font-bold mb-2">이화여대의 아름다운 새벽녘</div>
            <div className="m-4 text-xs font-semibold mb-2">이화여대에서 오늘 하루의 해가 떠오르고 있다.</div>
            <div className="m-4 text-xs font-light mb-5">A.M.5:32</div>
          </div>

          <div>
            <div className="bg-green-800 rounded-md text-white text-center py-2.5 px-4">
              더 많은 사진 보러 가기
            </div>
          </div>
        </div>
      </div></>
  );
};
