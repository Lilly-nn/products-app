'use client';
import { useState } from 'react';
import { AiOutlineEyeInvisible, AiOutlineEye } from 'react-icons/ai';

export default function AuthorizeInput({
  type,
  placeholder,
  value,
  setValue,
}: {
  type: string;
  placeholder: string;
  value: string;
  setValue: (arg: string) => void;
}) {
  const [isVisible, setIsVisible] = useState(false);
  return type === 'password' ? (
    <div className='password-input'>
      <input
        onChange={(e) => setValue(e.target.value)}
        value={value}
        className='w-[90%]'
        type={isVisible ? 'text' : 'password'}
        placeholder={placeholder}
      />
      {isVisible ? (
        <AiOutlineEye onClick={() => setIsVisible(!isVisible)} />
      ) : (
        <AiOutlineEyeInvisible onClick={() => setIsVisible(!isVisible)} />
      )}
    </div>
  ) : (
    <input
      value={value}
      onChange={(e) => setValue(e.target.value)}
      className='input'
      type={type}
      placeholder={placeholder}
    />
  );
}
