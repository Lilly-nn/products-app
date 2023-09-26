'use client';
import ProductCard from '@/components/ProductCard';
import CategoriesAsideBar from '@/components/categoriesPage/CategoriesAsideBar';
import { useGetAllProductsQuery } from '@/context/services/productsApi';
import { CategoriesFilterType } from '@/types/categoriesType';
import { ProductType } from '@/types/productsType';
import { useEffect, useState } from 'react';

export default function CategoryPage() {
  const { data, error, isLoading } = useGetAllProductsQuery('');
  const [products, setProducts] = useState<ProductType[]>();
  const [categoriesFilter, setCategoriesFilter] = useState<CategoriesFilterType>({
    name: '',
    price: { min: 0, max: 1700 },
    rating: [],
    brands: [],
  });

  function filterProducts() {
    const filteredProducts = data?.products?.filter((product) => {
      if (categoriesFilter.name && product.category !== categoriesFilter.name) {
        return false;
      }

      const filteredByRating = categoriesFilter.rating.map((item) =>
        Number(item) > Math.round(product.rating) ? '' : product
      );

      if (filteredByRating.length > 0 && !filteredByRating.includes(product)) {
        return false;
      }

      if (categoriesFilter.brands.length > 0 && !categoriesFilter.brands.includes(product.brand)) {
        return false;
      }
      if (
        (categoriesFilter.price && product.price > categoriesFilter.price?.max) ||
        (categoriesFilter.price && product.price < categoriesFilter.price?.min)
      ) {
        return false;
      }
      return true;
    });

    setProducts(filteredProducts);
  }

  useEffect(() => {
    setProducts(data?.products);
  }, [isLoading]);

  useEffect(() => {
    filterProducts();
  }, [
    categoriesFilter.name,
    categoriesFilter.brands,
    categoriesFilter.price?.min,
    categoriesFilter.price?.max,
    categoriesFilter.rating,
  ]);

  return (
    <section className='categories__section'>
      <div className='categories__container container'>
        <CategoriesAsideBar
          allProducts={data?.products}
          products={products}
          categoriesFilter={categoriesFilter}
          setCategoriesFilter={setCategoriesFilter}
        />
        <div className='categories__cards'>
          {products?.map((product) => (
            <ProductCard key={product.id} {...product} />
          ))}
          {!products?.length && !isLoading && (
            <span className='mt-2'>no products found which match your filter...</span>
          )}
          {isLoading && <span>Loading...</span>}
        </div>
      </div>
    </section>
  );
}
