'use client';
import { useEffect } from 'react';
import { FaRegCheckCircle } from 'react-icons/fa';
import { FaRegCircleXmark } from 'react-icons/fa6';
import { IoMdClose } from 'react-icons/io';

interface NotificationProps {
  message: string;
  isError: boolean;
  onClose: () => void;
}

export default function Notification({ message, isError, onClose }: NotificationProps) {
  useEffect(() => {
    const timer = setTimeout(() => {
      onClose();
    }, 3000);

    return () => clearTimeout(timer);
  }, [onClose]);

  return (
    <div className="fixed top-4 right-4 z-50">
      <div className={`flex items-center p-4 rounded-lg shadow-lg ${
        isError ? 'bg-red-50 text-red-800' : 'bg-green-50 text-green-800'
      }`}>
        {isError ? (
          <FaRegCircleXmark className="w-5 h-5 mr-2" />
        ) : (
          <FaRegCheckCircle className="w-5 h-5 mr-2" />
        )}
        <span>{message}</span>
        <button 
          onClick={onClose}
          className="ml-4 text-gray-500 hover:text-gray-700"
        >
          <IoMdClose className="w-4 h-4" />
        </button>
      </div>
    </div>
  );
}
