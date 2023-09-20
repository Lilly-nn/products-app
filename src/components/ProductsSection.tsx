'use client';
import { FetchService } from '@/API/services/FetchService';
import { useTypedSelector } from '@/hooks/useTypedSelector';
import { ProductType } from '@/types/productsType';
import Image from 'next/image';
import Link from 'next/link';
import { useEffect, useState } from 'react';
import CartSvg from './UI/CartSvg';
import MiniCardSection from './MiniCardSection';
import LikeSvg from './UI/LikeSvg';
import ProductCard from './ProductCard';

export default function ProductsSection() {
  const { chosenCategory } = useTypedSelector((state) => state.category);
  const [errorMessage, setErrorMessage] = useState<string | null>(null);
  const [products, setProducts] = useState<ProductType[] | null>(null);
  const hotDeals =
    products &&
    [...products].sort(
      (product1, product2) => product2.discountPercentage - product1.discountPercentage
    );
  const bestSellers =
    products && [...products].sort((product1, product2) => product1.stock - product2.stock);
  const topRated =
    products && [...products].sort((product1, product2) => product2.rating - product1.rating);

  useEffect(() => {
    const fetchProducts = async () => {
      const { data, error } = await FetchService.fetchByCategory(chosenCategory);
      console.log(data);
      if (error) {
        setErrorMessage("Couldn't load the data, sorry for the inconvenience");
        return;
      }
      setProducts(data);
    };

    if (chosenCategory) fetchProducts();
  }, [chosenCategory]);

  return (
    <section className='home__products'>
      <div className='section__header'>
        <h6 className='subtitle'>Products</h6>
        <h4 className='title'>Our Featured Products</h4>
      </div>
      <div className='section__content products-content'>
        <div className='products-content__header'>
          {products &&
            products.length > 0 &&
            products.map((product) => <ProductCard key={product.id} {...product} />)}
        </div>
        <div className='products-content__section'>
          <MiniCardSection title='Hot Deals' products={hotDeals} />
          <MiniCardSection title='best seller' products={bestSellers} />
          <MiniCardSection title='top rated' products={topRated} />
        </div>
      </div>
    </section>
  );
}
