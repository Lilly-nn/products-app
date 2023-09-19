import { categories } from '@/info/categories';
import categoryImg from '../../public/assets/categories/tel.png';
import Image from 'next/image';

export default function Categories() {
  return (
    <section className='home__categories'>
      <div className='section__header'>
        <h6 className='subtitle'>Category</h6>
        <h4 className='title'>Shop by Top Categories</h4>
      </div>
      <div className='section__content categories-content'>
        {categories.slice(0, 12).map((category) => (
          <button className='category-card' key={category.title}>
            <Image src={category.img} width={190} height={130} alt={`${category.title} image`} />
            {category.title.split('-').join(' ')}
          </button>
        ))}
      </div>
    </section>
  );
}
