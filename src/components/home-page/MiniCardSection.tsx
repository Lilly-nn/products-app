import { ProductType } from '@/types/productsType';
import ProductMiniCard from './ProductMiniCard';

type CardProps = {
  title: string;
  products: ProductType[] | null;
};

export default function MiniCardSection({ title, products }: CardProps) {
  return (
    <div className='subsection'>
      <span className='subsection__title'>{title}</span>
      <div className='subsection__content'>
        {products &&
          products.slice(0, 3).map((product) => <ProductMiniCard key={product.id} {...product} />)}
      </div>
    </div>
  );
}
