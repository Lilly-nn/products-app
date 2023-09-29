import FacebookSvg from '@/../public/assets/social-media/facebook 1.svg';
import InstagramSvg from '@/../public/assets/social-media/instagram 1.svg';
import PinterestSvg from '@/../public/assets/social-media/pinterest.svg';
import TwitterSvg from '@/../public/assets/social-media/twitter 1.svg';
import Image from 'next/image';
import Link from 'next/link';

export default function SocialIcons() {
  return (
    <div className='subscribe__social'>
      <Link href='/' className='icon'>
        <Image src={FacebookSvg} width={20} height={20} alt='facebook icon' />
      </Link>
      <Link href='/' className='icon'>
        <Image src={TwitterSvg} width={20} height={20} alt='twitter icon' />
      </Link>
      <Link href='/' className='icon'>
        <Image src={PinterestSvg} width={20} height={20} alt='pinterest icon' />
      </Link>
      <Link href='/' className='icon'>
        <Image src={InstagramSvg} width={20} height={20} alt='instagram icon' />
      </Link>
    </div>
  );
}
