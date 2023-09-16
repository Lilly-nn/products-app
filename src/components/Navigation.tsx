import telImg from '../../public/assets/PhoneCall 1.svg';
import Image from 'next/image';

export default function Navigation() {
  return (
    <div>
      <div className='flex items-center gap-3'>
        <Image src={telImg} width={32} height={32} alt='tel' />
        <div className='flex flex-col gap-[2px]'>
          <span className='text-gray-400'>Customer Services</span>
          <a className='text-xl' href='tel:+2195550114'>
            (219) 555-0114
          </a>
        </div>
      </div>
    </div>
  );
}
