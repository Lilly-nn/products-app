import Image from 'next/image';
import firstImg from '../../../public/assets/about/first-img.jpg';
import secondImg from '../../../public/assets/about/second-img.jpg';
import thirdImg from '../../../public/assets/about/third-img.png';
import leafSvg from '../../../public/assets/about/icons/leaf 2.svg';
import starSvg from '../../../public/assets/about/icons/stars 1.svg';
import truckSvg from '../../../public/assets/about/icons/delivery-truck 1.svg';
import supportSvg from '../../../public/assets/about/icons/headphones 1.svg';
import packageSvg from '../../../public/assets/about/icons/shopping-bag.svg';
import packSvg from '../../../public/assets/about/icons/package.svg';
import { BsCheck } from 'react-icons/bs';
import ShopNowBtn from '@/components/UI/ShopNowBtn';

export default function AboutPage() {
  return (
    <section className='about__section'>
      <div className='first-slide  slide container gap-x-[58px]'>
        <div className='first-slide__text slide-part '>
          <h3 className='slide-title'>100% Trusted Organic Food Store</h3>
          <p className='slide-desc mt-8'>
            Morbi porttitor ligula in nunc varius sagittis. Proin dui nisi, laoreet ut tempor ac,
            cursus vitae eros. Cras quis ultricies elit. Proin ac lectus arcu. Maecenas aliquet vel
            tellus at accumsan. Donec a eros non massa vulputate ornare. Vivamus ornare commodo
            ante, at commodo felis congue vitae.
          </p>
        </div>
        <div className='slide-part '>
          <Image src={firstImg} alt='farmer img' width={716} height={492} />
        </div>
      </div>
      <div className='second-slide slide gap-x-4'>
        <div className='slide-part '>
          <Image src={secondImg} alt='farmer img' width={716} height={492} />
        </div>
        <div className='second-slide__text slide-part max-w-[612px]'>
          <h3 className='slide-title'>Store for any needs</h3>
          <p className='slide-desc mt-5'>
            Pellentesque a ante vulputate leo porttitor luctus sed eget eros. Nulla et rhoncus
            neque. Duis non diam eget est luctus tincidunt a a mi. Nulla eu eros consequat tortor
            tincidunt feugiat.
          </p>
          <div className='options'>
            <div className='option'>
              <div className='option__icon'>
                <Image src={leafSvg} height={40} width={40} alt='icon' />
              </div>
              <div className='option__desc'>
                <span>100% Organic food</span>
                <p>100% healthy & Fresh food</p>
              </div>
            </div>
            <div className='option'>
              <div className='option__icon'>
                <Image src={supportSvg} height={40} width={40} alt='icon' />
              </div>
              <div className='option__desc'>
                <span>Great Support 24/7</span>
                <p>Instant access to Contact</p>
              </div>
            </div>
            <div className='option'>
              <div className='option__icon'>
                <Image src={starSvg} height={40} width={40} alt='icon' />
              </div>
              <div className='option__desc'>
                <span>Customer Feedback</span>
                <p>Our happy customer</p>
              </div>
            </div>
            <div className='option'>
              <div className='option__icon'>
                <Image src={packageSvg} height={40} width={40} alt='icon' />
              </div>
              <div className='option__desc'>
                <span>100% Secure Payment</span>
                <p>We ensure your money is save</p>
              </div>
            </div>
            <div className='option'>
              <div className='option__icon'>
                <Image src={truckSvg} height={40} width={40} alt='icon' />
              </div>
              <div className='option__desc'>
                <span>Free Shipping</span>
                <p>Free shipping with discount</p>
              </div>
            </div>

            <div className='option'>
              <div className='option__icon'>
                <Image src={packSvg} height={40} width={40} alt='icon' />
              </div>
              <div className='option__desc'>
                <span>Fast Shipping</span>
                <p>You get your items fast</p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className='third-slide slide container gap-x-7'>
        <div className='third-slide__text slide-part '>
          <h3 className='slide-title'>We Delivered, You Enjoy Your Order</h3>
          <p className='slide-desc mt-8'>
            Ut suscipit egestas suscipit. Sed posuere pellentesque nunc, ultrices consectetur velit
            dapibus eu. Mauris sollicitudin dignissim diam, ac mattis eros accumsan rhoncus.
            Curabitur auctor bibendum nunc eget elementum.
          </p>
          <div className='check-options'>
            <p>
              <BsCheck /> Sed in metus pellentesque.
            </p>
            <p>
              <BsCheck /> Fusce et ex commodo, aliquam nulla efficitur, tempus lorem.
            </p>
            <p>
              <BsCheck /> Maecenas ut nunc fringilla erat varius.
            </p>
          </div>
          <ShopNowBtn link={`/categories`} />
        </div>
        <div className='slide-part '>
          <Image src={thirdImg} alt='farmer img' width={716} height={492} />
        </div>
      </div>
    </section>
  );
}
