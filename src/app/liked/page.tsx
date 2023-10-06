'use client';
import { useGetLiked } from '@/hooks/useLiked';
import React from 'react';

export default function LikedPage() {
  const likedProducts = useGetLiked();
  console.log(likedProducts);
  return (
    <section className='liked__section container'>
      <h4 className='title'>Your Liked Products</h4>
    </section>
  );
}
