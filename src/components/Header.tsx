'use client';
import Image from 'next/image';
import React, { useEffect, useState } from 'react';
import mapSvg from '../../public/assets/Map Pin.svg';
import logoImg from '@/../public/assets/logo.svg';
import likeSvg from '../../public/assets/Heart.svg';
import bagSvg from '../../public/assets/Bag.svg';
import Link from 'next/link';
import SearchInput from './SearchInput';
import { useTypedSelector } from '@/hooks/useTypedSelector';

export default function Header() {
  const userId = localStorage.getItem('user_id');
  const { isAuthorized } = useTypedSelector((state) => state.user);
  const { totalItemsAmount, totalPrice } = useTypedSelector((state) => state.cart);
  return (
    <header className='header'>
      <div className='header__container container'>
        <div className='header__top'>
          <div className='header__top-location'>
            <Image src={mapSvg} width={15} height={18} alt='map svg' />
            <span className='text-gray-400 font-normals'>
              Store Location: Lincoln- 344, Illinois, Chicago, USA
            </span>
          </div>
          <div className='header__top-options text-gray-600 font-medium'>
            <select>
              <option>Eng</option>
            </select>
            <select>
              <option>USD</option>
            </select>
            {userId || isAuthorized ? (
              <Link className='link__sign-in' href={`/account/${userId}`}>
                My Account
              </Link>
            ) : (
              <Link className='link__sign-in' href='/sign-up'>
                Sign In / Sign Up
              </Link>
            )}
          </div>
        </div>
        <div className='header__content'>
          <Link href='/' className='header__logo logo'>
            <Image src={logoImg} height={32} width={32} alt='logo' />
            <span className='logo font-medium text-[38px]'>Ecobazar</span>
          </Link>
          <SearchInput />
          <div className='header__user-info'>
            <Link href='/liked'>
              <Image className='heart-icon' src={likeSvg} width={30} height={30} alt='like' />
            </Link>
            <Link href='/cart' className='cart-icon__content'>
              <div className='icon'>
                <Image src={bagSvg} width={32} height={32} alt='bag' />
                <span className='length'>{totalItemsAmount}</span>
              </div>
              <div className='cart-icon__info'>
                <span className='title'>Shopping cart:</span>
                <span className='total'>${totalPrice}</span>
              </div>
            </Link>
          </div>
        </div>
      </div>
    </header>
  );
}
