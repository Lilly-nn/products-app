'use client';
import Image from 'next/image';
import React, { useEffect, useState } from 'react';
import filterSvg from '../../../public/assets/Filter 24px.svg';
import CategoriesTab from './CategoriesTab';
import { categories } from '@/info/categories';
import { categoryRating } from '@/info/categoryRating';
import { calculateRating } from '@/utils/calculateRating';
import Stars from '../UI/Stars';
import { ProductType } from '@/types/productsType';
import { CategoriesFilterType } from '@/types/categoriesType';
import { sortUnique } from '@/utils/sort';

export default function CategoriesAsideBar({
  products,
  categoryQuery = '',
  categoriesFilter,
  setCategoriesFilter,
  allProducts,
}: {
  products: ProductType[] | undefined;
  categoryQuery?: string;
  categoriesFilter: CategoriesFilterType;
  setCategoriesFilter: any;
  allProducts?: ProductType[] | undefined;
}) {
  const [brands, setBrands] = useState<string[]>([]);
  const allBrands =
    brands.length > 0
      ? sortUnique(brands)
      : allProducts && allProducts.length > 0
      ? sortUnique(allProducts.map((el: ProductType) => el.brand))
      : sortUnique(products?.map((el: ProductType) => el.brand));

  useEffect(() => {
    function changeBrands() {
      if (categoriesFilter.name) {
        if (products && products.length >= 5) {
          setBrands(products?.map((el: ProductType) => el.brand));
        }
      }
    }
    changeBrands();
  }, [categoriesFilter.name, products]);

  function chooseRating(e: React.ChangeEvent<HTMLInputElement>) {
    const selectedRating = e.target.value;
    if (!categoriesFilter.rating.includes(selectedRating)) {
      setCategoriesFilter({
        ...categoriesFilter,
        rating: [...categoriesFilter.rating, e.target.value],
      });
    } else {
      setCategoriesFilter({
        ...categoriesFilter,
        rating: categoriesFilter.rating.filter((el) => el !== selectedRating),
      });
    }
  }

  function chooseBrand(e: any) {
    const selectedBrand = e.target.value;
    if (!categoriesFilter.brands.includes(selectedBrand)) {
      setCategoriesFilter({
        ...categoriesFilter,
        brands: [...categoriesFilter.brands, e.target.value],
      });
    } else {
      setCategoriesFilter({
        ...categoriesFilter,
        brands: categoriesFilter.brands.filter((el) => el !== selectedBrand),
      });
    }
  }

  return (
    <aside className='categories__aside'>
      <div className='categories__aside-header'>
        <div className='categories__aside-name'>
          <span>Filter</span>
          <Image src={filterSvg} width={20} height={17} alt='svg' />
        </div>
        {categoriesFilter.brands &&
          categoriesFilter.brands.map((brand) => (
            <input
              className='categories__aside-chosen'
              onClick={chooseBrand}
              size={brand.length}
              value={brand}
              readOnly
              key={brand}
            />
          ))}
      </div>

      <div className='categories__aside-tabs'>
        {!categoryQuery && (
          <CategoriesTab title='All Categories'>
            <div className='categories__filter'>
              {categories &&
                categories.map((category) => (
                  <label key={category.title} className='categories__filter-category'>
                    <input
                      onChange={(e) => {
                        setCategoriesFilter({ ...categoriesFilter, name: e.target.value });
                      }}
                      type='radio'
                      checked={categoriesFilter.name === category.title}
                      id={category.title}
                      value={category.title}
                    />
                    {category.title.split('-').join(' ')}
                  </label>
                ))}
            </div>
          </CategoriesTab>
        )}

        <CategoriesTab title='Price'>
          <span>price</span>
        </CategoriesTab>
        <CategoriesTab title='Rating'>
          <div className='categories__aside-rating'>
            {categoryRating.map((el) => (
              <label key={el.text} className='flex gap-x-1 items-center'>
                <input
                  type='checkbox'
                  onChange={chooseRating}
                  name='rating'
                  className='mr-1 cursor-pointer'
                  value={el.stars}
                />
                <Stars stars={calculateRating(el.stars)} />
                <span className='text-sm  text-black ml-1'>{el.text}</span>
              </label>
            ))}
          </div>
        </CategoriesTab>
        <CategoriesTab title='Brands'>
          <div className='flex gap-2 flex-wrap'>
            {allBrands?.map((brand) => (
              <input
                onClick={chooseBrand}
                size={brand.length}
                value={brand}
                readOnly
                className={`categories__aside-brand ${
                  categoriesFilter.brands.includes(brand) ? 'active' : ''
                }`}
                key={brand}
              />
            ))}
          </div>
        </CategoriesTab>
      </div>
    </aside>
  );
}