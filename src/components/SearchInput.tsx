import Image from 'next/image';
import magnifier from '../../public/assets/Search.svg';

export default function SearchInput() {
  return (
    <div className='flex border border-gray-200'>
      <Image
        className='py-[15px] ml-5 mr-[10px]'
        src={magnifier}
        width={20}
        height={20}
        alt='magnifier'
      />
      <input className='px-3 focus:outline-none max-w-[410px]' type='text' placeholder='Search' />
      <button className='bg-[#00b207] text-white font-semibold px-[24px] py-[14px]' type='button'>
        Search
      </button>
    </div>
  );
}
