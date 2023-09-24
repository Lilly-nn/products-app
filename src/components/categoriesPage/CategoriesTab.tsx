'use client';
import Image from 'next/image';
import Arrow from '../../../public/assets/arrowUp.svg';
import { useState } from 'react';

type CategoriesTabType = {
  children: React.ReactNode;
  title: string;
};

export default function CategoriesTab({ children, title }: CategoriesTabType) {
  const [isVisible, setIsVisible] = useState(false);
  return (
    <div className='categories__aside-tab'>
      <div className='tab__header' onClick={() => setIsVisible(!isVisible)}>
        <h6 className='tab__title'>{title}</h6>
        <Image src={Arrow} alt='arrow' className={`arrow ${!isVisible ? 'down' : ''}`} />
      </div>
      {isVisible && <div className='tab__content'>{children}</div>}
    </div>
  );
}
