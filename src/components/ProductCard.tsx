'use client';
import Image from 'next/image';
import Link from 'next/link';
import React, { useState } from 'react';
import LikeSvg from './UI/LikeSvg';
import CartSvg from './UI/CartSvg';
import { ProductType } from '@/types/productsType';
import { calculateRating } from '@/utils/calculateRating';

export default function ProductCard({ ...product }: ProductType) {
  const [isLiked, setIsLiked] = useState(false);

  function addToLiked(e: React.MouseEvent<HTMLDivElement>) {
    e.preventDefault();
    setIsLiked(!isLiked);
  }

  return (
    <Link href={`/${product.category}/${product.id}`} key={product.id} className='product__card'>
      <div className={`like ${isLiked ? 'active' : ''}`} onClick={(e) => addToLiked(e)}>
        <LikeSvg />
      </div>

      <Image
        className='product__image'
        src={product.images[0]}
        width={250}
        height={250}
        alt={product.title}
      />
      <div className='product__info'>
        <div className='flex flex-col gap-y-[6px]'>
          <span className='product__title'>{product.title}</span>
          <span className='product__price'>${product.price}</span>
          <div className='product__rating'>{calculateRating(product.rating)}</div>
        </div>
        <div className='svg'>
          <CartSvg />
        </div>
      </div>
    </Link>
  );
}
