'use client';
import Image from 'next/image';
import Link from 'next/link';
import React, { useState } from 'react';
import CartSvg from './UI/CartSvg';
import LikeSvg from './UI/LikeSvg';

export default function ProductMiniCard({ ...product }) {
  const [isLiked, setIsLiked] = useState(false);
  const [isAddedToBag, setIsAddedToBag] = useState(false);

  function addToBag(e: React.MouseEvent<HTMLDivElement>) {
    e.preventDefault();
    setIsAddedToBag(!isAddedToBag);
  }

  function addToLiked(e: React.MouseEvent<HTMLDivElement>) {
    e.preventDefault();
    setIsLiked(!isLiked);
  }
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
        <span className='product__mini-card-price'>${product.price}</span>
        <span className='product__mini-card-rating'>rating: {product.rating}</span>
        <div className='product__mini-card-add'>
          <div className={`${isAddedToBag ? 'active' : ''}`} onClick={addToBag}>
            <CartSvg />
          </div>
          <div className={`${isLiked ? 'active' : ''}`} onClick={addToLiked}>
            <LikeSvg />
          </div>
        </div>
      </div>
    </Link>
  );
}
