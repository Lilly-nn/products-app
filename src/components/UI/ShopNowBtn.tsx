import Link from 'next/link';
import ArrowSvg from './ArrowSvg';

export default function ShopNowBtn({ link }: { link: string }) {
  return (
    <Link href={link} className='btn__shop-now'>
      Shop now
      <ArrowSvg />
    </Link>
  );
}
