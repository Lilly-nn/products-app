import { brandsPath } from '@/info/brands';
import Image from 'next/image';

export default function HomeBrands() {
  return (
    <section className='home__brands'>
      <div className='home__brands-container'>
        {brandsPath.map((brand, idx) => (
          <div className='home__brand' key={idx}>
            <Image src={brand} alt={brand + ' name'} width={80} height={30} />
          </div>
        ))}
      </div>
    </section>
  );
}
