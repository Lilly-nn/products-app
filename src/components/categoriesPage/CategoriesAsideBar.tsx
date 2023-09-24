'use client';
import Image from 'next/image';
import React from 'react';
import filterSvg from '../../../public/assets/Filter 24px.svg';
import CategoriesTab from './CategoriesTab';
import { categories } from '@/info/categories';
import Link from 'next/link';
import { categoryRating } from '@/info/categoryRating';
import { calculateRating } from '@/utils/calculateRating';
import Stars from '../UI/Stars';
import { ProductType } from '@/types/productsType';

export default function CategoriesAsideBar({
  products,
  categoryQuery,
}: {
  products: ProductType[] | undefined;
  categoryQuery: string;
}) {
  const brands = products?.map((el: ProductType) => el.brand);
  const uniqueBrands = [...new Set(brands)] as string[];
  return (
    <aside className='categories__aside'>
      <div className='categories__aside-name'>
        <span>Filter</span>
        <Image src={filterSvg} width={20} height={17} alt='svg' />
      </div>
      <div className='categories__aside-tabs'>
        <CategoriesTab title='All Categories'>
          <div className='categories__filter'>
            {categories &&
              categories.map((category) => (
                <label key={category.title} className='categories__filter-category'>
                  <input type='radio' id={category.title} value={category.title} />
                  {category.title.split('-').join(' ')}
                </label>
              ))}
          </div>
        </CategoriesTab>
        <CategoriesTab title='Price'>
          <span>price</span>
        </CategoriesTab>
        <CategoriesTab title='Rating'>
          <div className='categories__aside-rating'>
            {categoryRating.map((el) => (
              <label key={el.text} className='flex gap-x-1 items-center'>
                <input type='checkbox' className='mr-1 cursor-pointer' />
                <Stars stars={calculateRating(el.stars)} />
                <span className='text-sm  text-black ml-1'>{el.text}</span>
              </label>
            ))}
          </div>
        </CategoriesTab>
        <CategoriesTab title='Brands'>
          <div className='flex gap-2 flex-wrap'>
            {uniqueBrands.map((brand) => (
              <div className='categories__aside-brand' key={brand}>
                {brand}
              </div>
            ))}
          </div>
        </CategoriesTab>
      </div>
    </aside>
  );
}
