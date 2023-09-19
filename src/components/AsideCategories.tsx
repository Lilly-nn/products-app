'use client';
import { categories } from '@/info/categories';
import React, { useState } from 'react';
import plusSvg from '../../public/assets/plus-solid 1.svg';
import Image from 'next/image';
import Link from 'next/link';

export default function AsideCategories() {
  const [limit, setLimit] = useState(9);
  return (
    <div className={`home__main-categories ${limit > 10 ? 'scroll' : ''}`}>
      {categories.slice(0, limit).map((category) => (
        <Link href={`/${category.title}`} className='category' key={category.title}>
          {category.title.split('-').join(' ')}
        </Link>
      ))}
      {limit < 10 ? (
        <button
          onClick={() => setLimit(50)}
          type='button'
          className={`btn__show-more flex gap-x-3 ${limit > 10 ? 'scroll' : ''}`}>
          <Image src={plusSvg} width={24} height={24} alt='show more' />
          View all Category
        </button>
      ) : (
        <button onClick={() => setLimit(9)}>Close</button>
      )}
    </div>
  );
}
