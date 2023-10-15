'use client';
import { PageLinks, pagesLinks } from '@/info/pages';
import Image from 'next/image';
import Link from 'next/link';
import { useEffect, useState } from 'react';
import magnifier from '../../public/assets/Search.svg';

export default function SearchInput() {
  const [searchValue, setSearchValue] = useState('');
  const [isVisible, setIsVisible] = useState(false);
  const [filtered, setFiltered] = useState<PageLinks[]>([]);

  useEffect(() => {
    if (searchValue.trim() !== '') {
      const filtered = pagesLinks.filter((link) =>
        link.title.toLowerCase().includes(searchValue.toLowerCase())
      );
      setFiltered(filtered);
    } else {
      setFiltered(pagesLinks);
    }
  }, [searchValue]);

  useEffect(() => {
    function setInvisible() {
      setIsVisible(false);
    }

    window.addEventListener('click', setInvisible);

    return () => window.removeEventListener('click', setInvisible);
  }, []);

  return (
    <div className='relative'>
      <div className='flex border border-gray-200' onClick={(e) => e.stopPropagation()}>
        <Image
          className='py-[15px] ml-5 mr-[10px]'
          src={magnifier}
          width={20}
          height={20}
          alt='magnifier'
        />
        <input
          tabIndex={1}
          className='px-3 focus:outline-none max-w-[410px]'
          value={searchValue}
          onChange={(e) => setSearchValue(e.target.value)}
          onFocus={(e) => setIsVisible(true)}
          type='text'
          placeholder='Search for page..'
        />
        <button className='bg-[#00b207] text-white font-semibold px-[24px] py-[14px]' type='button'>
          Search
        </button>
      </div>
      {isVisible && (
        <div className='flex flex-col gap-y bg-gray-100 z-10 mt-2 absolute w-full rounded-md shadow-md'>
          {filtered &&
            filtered.slice(0, 5).map((page) => (
              <Link
                tabIndex={0}
                onClick={() => setSearchValue('')}
                key={page.title}
                href={page.url}
                className='p-2 px-4 text-gray-700 hover:bg-gray-300'>
                {page.title}
              </Link>
            ))}
        </div>
      )}
    </div>
  );
}
