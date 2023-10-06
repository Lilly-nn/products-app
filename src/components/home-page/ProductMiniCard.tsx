'use client';
import useAddToCart from '@/hooks/useAddToCart';
import { ProductType } from '@/types/productsType';
import Image from 'next/image';
import Link from 'next/link';
import React, { useState } from 'react';
import CartSvg from '../UI/CartSvg';
import useChangeCurrency from '@/hooks/useChangeCurrency';

export default function ProductMiniCard({ ...product }: ProductType) {
  const [isAddedToBag, setIsAddedToBag] = useState(false);
  const { productPrice, currencySign } = useChangeCurrency(product);

  const addToBag = useAddToCart({ product, isAddedToBag, setIsAddedToBag });

  return (
    <Link
      href={`/${product.category}/${product.id}`}
      key={product.id}
      className='product__mini-card'>
      <Image
        src={product.images[0]}
        width={100}
        height={100}
        alt={product.title}
        className='product__mini-card-image'
      />
      <div className='product__mini-card-content'>
        <span className='product__mini-card-title'>{product.title}</span>
        <span className='product__mini-card-price'>
          {currencySign !== 'UAH' ? currencySign : ''}
          {productPrice?.toFixed(2)}
        </span>
        <span className='product__mini-card-rating'>rating: {product.rating}</span>
        <div className='product__mini-card-add'>
          <div
            className={`${isAddedToBag ? 'active' : ''}`}
            onClick={(e) => {
              e.preventDefault();
              addToBag();
            }}>
            <CartSvg />
          </div>
        </div>
      </div>
    </Link>
  );
}
