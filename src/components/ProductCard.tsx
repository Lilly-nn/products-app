'use client';
import useAddToCart from '@/hooks/useAddToCart';
import { ProductType } from '@/types/productsType';
import { calculateRating } from '@/utils/calculateRating';
import Image from 'next/image';
import Link from 'next/link';
import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import CartSvg from './UI/CartSvg';
import LikeSvg from './UI/LikeSvg';
import Stars from './UI/Stars';
import useChangeCurrency from '@/hooks/useChangeCurrency';
import { useCheckLiked, useGetLiked } from '@/hooks/useLiked';
import axios from 'axios';
import useGetUserId from '@/hooks/useGetUserId';

export default function ProductCard({ ...product }: ProductType) {
  const [isLiked, setIsLiked] = useState(false);
  const [isAddedToBag, setIsAddedToBag] = useState(false);
  const stars = calculateRating(product.rating);
  const { productPrice, currencySign } = useChangeCurrency(product);
  const userId = useGetUserId();

  async function addToLiked(e: React.MouseEvent<HTMLDivElement>, product: ProductType) {
    e.preventDefault();
    setIsLiked(!isLiked);
    try {
      const res = await axios.put('/api/liked', {
        userId,
        product,
      });
    } catch (err) {
      console.log(err);
    }
  }

  const addToBag = useAddToCart({ product, isAddedToBag, setIsAddedToBag });

  useCheckLiked(setIsLiked, product.id);

  return (
    <Link
      scroll={false}
      href={`/${product.category}/${product.id}`}
      key={product.id}
      className='product__card'>
      <div className={`like ${isLiked ? 'active' : ''}`} onClick={(e) => addToLiked(e, product)}>
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
          <span className='product__price'>
            {currencySign}
            {productPrice?.toFixed(2)}
          </span>
          <div className='product__rating'>
            <Stars stars={stars} />
          </div>
        </div>
        <div
          className={`${isAddedToBag ? 'active' : ''} svg`}
          onClick={(e) => {
            e.preventDefault();
            addToBag();
          }}>
          <CartSvg />
        </div>
      </div>
    </Link>
  );
}
