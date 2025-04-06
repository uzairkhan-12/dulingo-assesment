'use client';
import { useState } from 'react';
import Image from 'next/image';
import { BsStars } from 'react-icons/bs';
import { AiFillHeart } from 'react-icons/ai';
import { IoMdClose } from 'react-icons/io';
import Button from '../../components/Button';
import Notification from '../../components/Notification';

const options = [
  {
    id: 3,
    label: 'coffee',
    image: '/coffe.png',
  },
  {
    id: 2,
    label: 'tea',
    image: '/tea.png',
  },
  {
    id: 1,
    label: 'milk',
    image: '/milk.png',
  },
];

export default function Home() {
  const [selectedId, setSelectedId] = useState<number | null>(null);
  const [notification, setNotification] = useState<{message: string, isError: boolean} | null>(null);

  const handleCheck = () => {
    if (selectedId === null) return;
    
    if (selectedId === 3) {
      setNotification({
        message: 'إجابة صحيحة! أحسنت!',
        isError: false
      });
    } else {
      setNotification({
        message: 'إجابة خاطئة! حاول مرة أخرى.',
        isError: true
      });
    }
  };

  const handleSkip = () => {
    setNotification({
      message: 'تم تخطي السؤال!',
      isError: false
    });
    setSelectedId(null);
  };

  return (
    <div className="px-5 w-full lg:max-w-[70%] py-12 lg:mx-auto">
      {notification && (
        <Notification
          message={notification.message}
          isError={notification.isError}
          onClose={() => setNotification(null)}
        />
      )}

      <div className="flex items-center gap-x-2">
        <div className="flex items-center gap-x-1">
          <p className="text-red-500 font-bold text-lg">5</p>
          <AiFillHeart className="text-red-500 w-5 h-5" />
        </div>

        <div className="bg-gray-200 rounded-full h-2 w-full">
          <div className="bg-[#e5e5e5] rounded-full h-2 transition-all duration-500" style={{ width: '30%' }} />
        </div>

        <button className="text-gray-500 cursor-pointer hover:text-gray-700 transition-colors">
          <IoMdClose className="w-5 h-5" />
        </button>
      </div>

      <h1 className="text-end text-xl font-bold mb-4 mt-4 text-[#d382fb] flex justify-end items-center gap-2">
        كلمة جديدة <BsStars className="text-white p-0.5 rounded-full bg-[#d382fb] h-5 w-5" />
      </h1>

      <h2 className="text-end text-xl font-semibold mb-8">
        أي واحدة من هذه "قهوة"؟
      </h2>

      <div className="grid grid-cols-1 mb-10 sm:grid-cols-2 md:grid-cols-3 max-w-full lg:max-w-[80%] mx-auto gap-6 justify-center">
        {options.map((option) => (
          <div
            key={option.id}
            onClick={() => setSelectedId(option.id)}
            className={`flex flex-col items-center border rounded-xl p-4 cursor-pointer transition-all
              ${selectedId === option.id
                ? 'border-green-500 bg-green-50'
                : 'border-gray-200 hover:bg-gray-100'}
            `}
          >
            <Image
              src={option.image}
              alt={option.label}
              width={400}
              height={400}
              className="mb-4 rounded-md object-contain"
            />
            <div className='flex justify-between w-full items-center'>
              <span className="text-gray-400 border border-gray-300 rounded-lg px-2 py-1 mt-1">
                {option.id}
              </span>
              <p className="text-sm text-gray-800 font-semibold">
                {option.label}
              </p>
            </div>
          </div>
        ))}
      </div>

      <div className="fixed bottom-0 left-0 right-0 bg-white pb-5 pt-2 px-5 border-t border-gray-200">
        <div className="max-w-full lg:max-w-[70%] mx-auto">
          <div className="flex justify-between gap-4">
            <Button
              variant="secondary"
              disabled={selectedId === null}
              onClick={handleCheck}
            >
              تحقق
            </Button>
            <Button variant="outline" onClick={handleSkip}>
              تخطي
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
}