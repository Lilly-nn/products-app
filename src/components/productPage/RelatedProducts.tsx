import { useGetProductsByCategoryQuery } from '@/context/services/productsApi';
import React from 'react';
import ProductCard from '../ProductCard';

export default function RelatedProducts({
  productId,
  productCategory,
}: {
  productId: number;
  productCategory: string;
}) {
  const { data, isLoading, isError } = useGetProductsByCategoryQuery(productCategory);
  const relatedProducts = data?.products.filter((product) => product.id !== productId);
  console.log(relatedProducts);
  return (
    <section className='related-products container'>
      <h3 className='title '>Related Products</h3>
      <div className='products'>
        {relatedProducts?.slice(0, 4).map((product) => (
          <ProductCard {...product} key={product.id} />
        ))}
      </div>
      {isLoading && <span>Loading...</span>}
    </section>
  );
}
