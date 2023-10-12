'use client';
import ProductCard from '@/components/ProductCard';
import useCheckAuthorized from '@/hooks/useCheckUser';
import { useGetLiked } from '@/hooks/useLiked';
import React from 'react';

export default function LikedPage() {
  const { likedProducts, loading, error } = useGetLiked();

  useCheckAuthorized();

  return (
    <section className='liked__section container'>
      <h4 className='title'>My wishlist</h4>
      <div className='liked__items'>
        {loading && <span>Loading...</span>}
        {likedProducts.length > 0 &&
          !loading &&
          likedProducts.map((product) => <ProductCard key={product.id} {...product} />)}
        {!loading && error && <span>Failed to fetch, try again later</span>}
        {!loading && !error && !likedProducts.length && <span>No products liked yet...</span>}
      </div>
    </section>
  );
}
