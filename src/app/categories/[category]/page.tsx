'use client';
import CategoriesAsideBar from '@/components/categoriesPage/CategoriesAsideBar';
import { useParams } from 'next/navigation';
import {
  useGetAllProductsQuery,
  useGetProductsByCategoryQuery,
} from '@/context/services/productsApi';
import ProductCard from '@/components/ProductCard';

export default function CategoryPage() {
  const { category: categoryQuery } = useParams();
  // const { data, error, isLoading } = useGetProductsByCategoryQuery(categoryQuery.toString());
  const { data, error } = useGetAllProductsQuery('');
  console.log(data);
  return (
    <section className='categories__section'>
      <div className='categories__container container'>
        <CategoriesAsideBar products={data?.products} categoryQuery={categoryQuery.toString()} />
        <div className='categories__cards'>
          {data?.products.map((product) => (
            <ProductCard key={product.id} {...product} />
          ))}
        </div>
      </div>
    </section>
  );
}
