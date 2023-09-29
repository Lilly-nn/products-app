import Image from 'next/image';
import Link from 'next/link';
import logoImg from '@/../public/assets/logo.svg';
import { footerLinks } from '@/info/footerLinks';
import AppleSvg from '@/../public/assets/apps/Apple-1.svg';
import GoogleSvg from '@/../public/assets/apps/google-play 1.svg';
import ApplePay from '@/../public/assets/payment/ApplePay.svg';
import Visa from '@/../public/assets/payment/visa-logo.svg';
import Discover from '@/../public/assets/payment/Discover.svg';
import Secure from '@/../public/assets/payment/lock.svg';
import MasterCard from '@/../public/assets/payment/Mastercard.svg';
import Input from './UI/input/Input';
import SocialIcons from './UI/SocialIcons';

export default function Footer() {
  return (
    <footer className='footer'>
      <div className='footer__header '>
        <div className='footer__header-content container'>
          <div className='footer__header-left'>
            <Image src='/assets/letter.svg' width={42} height={38} alt='letter svg' />
            <div className='subscribe'>
              <span className='subscribe__title'>Subcribe our Newsletter</span>
              <p className='subscribe__text'>
                Pellentesque eu nibh eget mauris congue mattis matti.
              </p>
            </div>
          </div>
          <div className='footer__header-right'>
            <Input placeholder='Your email address' text='Subcribe' />
            <SocialIcons />
          </div>
        </div>
      </div>
      <div className='footer__content'>
        <div className='footer__content-sections container'>
          <div className='footer__content-contact'>
            <Link href='/' className='logo'>
              <Image src={logoImg} height={32} width={32} alt='logo' />
              <span className='logo font-medium text-[32px]'>Ecobazar</span>
            </Link>
            <p className='text'>
              Morbi cursus porttitor enim lobortis molestie. Duis gravida turpis dui, eget bibendum
              magna congue nec.
            </p>
            <p className='contacts'>
              <a href='tel:2195550114'>(219) 555-0114</a> or{' '}
              <a href='mailto: Proxy@gmail.com'>Proxy@gmail.com</a>
            </p>
          </div>
          <div className='footer__content-links'>
            {footerLinks.map((link) => (
              <div key={link.sectionTitle} className='link__section'>
                <h6 className='link__title'>{link.sectionTitle}</h6>
                <div className='link__container'>
                  {link.links.map((el) => (
                    <Link className='link' key={el.title} href={el.path}>
                      {el.title}
                    </Link>
                  ))}
                </div>
              </div>
            ))}
          </div>
          <div className='footer__content-apps'>
            <span className='title'>Download Mobile App</span>
            <div className='flex gap-x-2 mt-4'>
              <button type='button'>
                <Image src={AppleSvg} alt='svg' width={28} height={28} />
                <div className='button-text'>
                  Download on the <span className='title'>App Store</span>
                </div>
              </button>
              <button type='button'>
                <Image src={GoogleSvg} alt='svg' width={28} height={28} />
                <div className='button-text'>
                  Download on the <span className='title'>Google Play</span>
                </div>
              </button>
            </div>
          </div>
        </div>
      </div>
      <div className='footer__footer'>
        <div className='footer__footer-container container'>
          <p className='footer__copyright'>
            Ecobazar eCommerce © {new Date().getFullYear()}. All Rights Reserved
          </p>
          <div className='flex gap-x-[2px]'>
            <div className='payment-card'>
              <Image src={ApplePay} width={32} height={14} alt='' />
            </div>
            <div className='payment-card'>
              <Image src={Visa} width={32} height={14} alt='' />
            </div>
            <div className='payment-card'>
              <Image src={Discover} width={32} height={14} alt='' />
            </div>
            <div className='payment-card'>
              <Image src={Secure} width={46} height={16} alt='' />
            </div>
            <div className='payment-card'>
              <Image src={MasterCard} width={32} height={14} alt='' />
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
