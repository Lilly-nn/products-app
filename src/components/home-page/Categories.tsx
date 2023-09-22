'use client';
import { useTypedSelector } from '@/hooks/useTypedSelector';
import { useDispatch } from 'react-redux';
import { categories } from '@/info/categories';
import Image from 'next/image';
import { changeCategory } from '@/context/features/categories/categoriesSlice';

export default function Categories() {
  const { chosenCategory } = useTypedSelector((state) => state.category);
  const dispatch = useDispatch();
  return (
    <section className='home__categories'>
      <div className='section__header'>
        <h6 className='subtitle'>Category</h6>
        <h4 className='title'>Shop by Top Categories</h4>
      </div>
      <div className='section__content categories-content'>
        {categories.slice(0, 12).map((category) => (
          <button
            onClick={() => dispatch(changeCategory(category.title))}
            className={`category-card ${chosenCategory === category.title ? 'active' : ''}`}
            key={category.title}>
            <Image src={category.img} width={190} height={130} alt={`${category.title} image`} />
            {category.title.split('-').join(' ')}
          </button>
        ))}
      </div>
    </section>
  );
}
