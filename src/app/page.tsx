import AsideCategories from '@/components/home-page/AsideCategories';
import BagSvg from '@/components/UI/BagSvg';
import HeadPhonesSvg from '@/components/UI/HeadPhonesSvg';
import PackageSvg from '@/components/UI/PackageSvg';
import ShopNowBtn from '@/components/UI/ShopNowBtn';
import TruckSvg from '@/components/UI/TruckSvg';
import Image from 'next/image';
import Link from 'next/link';
import telImg from '../../public/assets/PhoneCall 1.svg';
import menuIcon from '../../public/assets/menu 1.svg';
import Categories from '@/components/home-page/Categories';
import ProductsSection from '@/components/home-page/ProductsSection';
import { members } from '@/info/team';
import MembersSection from '@/components/home-page/MembersSection';

export default function Home() {
  return (
    <main className='container'>
      <div className='home__nav'>
        <div className='flex items-center'>
          <button className='btn'>
            <Image src={menuIcon} alt='menu btn' width={32} height={32} />
          </button>
          <Link href='/categories' className='text-white p-[20px]'>
            All categories
          </Link>
        </div>
        <div className=' flex justify-between items-center w-[70%] ml-auto'>
          <nav className='flex gap-[32px]'>
            <select className='text-white'>
              <option>Home</option>
            </select>
            <select className='bg-gray-900'>
              <option>Shop</option>
            </select>
            <select>
              <option>Pages</option>
            </select>
            <select>
              <option>Blog</option>
            </select>
            <Link href='about-us'>About us</Link>
            <Link href='contact-us'>Contact us</Link>
          </nav>
          <div className='tel'>
            <Image src={telImg} width={32} height={32} alt='tel' />
            <a className='text-xl' href='tel:+2195550114'>
              (219) 555-0114
            </a>
          </div>
        </div>
      </div>
      <section className='home__main-slide'>
        <div className='flex justify-between gap-x-6 mb-[30px]'>
          <AsideCategories />
          <div className='home__main-banner flex items-center'>
            <div className='ml-12'>
              <h2 className='text-5xl font-semibold leading-tight text-white max-w-[382px]'>
                Fresh & Healthy Organic Food
              </h2>
              <p className='font-medium text-2xl mt-5 mb-8 text-white opacity-60 uppercase max-w-[150px] tracking-[0.75]'>
                Sale Up to <span className='text-white'>48%</span> off
              </p>
              <ShopNowBtn link={`/categories/groceries`} />
            </div>
          </div>
        </div>
        <div className='home__main-options'>
          <div className='option'>
            <div className='icon'>
              <TruckSvg />
            </div>
            <div className='text'>
              <span className='title'>Free Shipping</span>
              <p className='description'>Free shipping with discount</p>
            </div>
          </div>
          <div className='option'>
            <div className='icon'>
              <HeadPhonesSvg />
            </div>
            <div className='text'>
              <span className='title'>Great Support 24/7</span>
              <p className='description'>Instant access to Contact</p>
            </div>
          </div>
          <div className='option'>
            <div className='icon'>
              <BagSvg />
            </div>
            <div className='text'>
              <span className='title'>100% Secure Payment</span>
              <p className='description'>We ensure your money is save</p>
            </div>
          </div>
          <div className='option'>
            <div className='icon'>
              <PackageSvg />
            </div>
            <div className='text'>
              <span className='title'>Money-Back Guarantee</span>
              <p className='description'>30 days money-back</p>
            </div>
          </div>
        </div>
      </section>
      <Categories />
      <ProductsSection />
      <MembersSection />
    </main>
  );
}
