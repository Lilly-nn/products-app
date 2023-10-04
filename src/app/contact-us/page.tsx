import Image from 'next/image';
import mapSvg from '../../../public/assets/Map Pin.svg';
import emailSvg from '../../../public/assets/contact-us/Email.svg';
import phoneSvg from '../../../public/assets/contact-us/Group.svg';
import Button from '@/components/UI/button/Button';
export default function ContactPage() {
  return (
    <section className='contact__section '>
      <div className='info__section container'>
        <div className='info'>
          <div className='info-item'>
            <Image width={30} height={30} src={mapSvg} alt='pin svg' />
            <p>2715 Ash Dr. San Jose, South Dakota 83475</p>
          </div>
          <div className='info-item'>
            <Image width={30} height={30} src={emailSvg} alt='pin svg' />
            <p>Proxy@gmail.com</p>
            <p>Help.proxy@gmail.com</p>
          </div>
          <div className='info-item'>
            <Image width={30} height={30} src={phoneSvg} alt='pin svg' />
            <p>(219) 555-0114</p>
            <p>(164) 333-0487</p>
          </div>
        </div>
        <div className='message'>
          <h6>Just Say Hello!</h6>
          <p>
            Do you fancy saying hi to me or you want to get started with your project and you need
            my help? Feel free to contact me.
          </p>
          <form>
            <input type='email' placeholder='Your email' />
            <input type='text' placeholder='Title' />
            <textarea placeholder='Subject' className='min-h-[98px] max-h-[200px]' />
            <Button value='Send message' type='submit' />
          </form>
        </div>
      </div>
      <iframe
        src='https://www.google.com/maps/embed?pb=!1m16!1m12!1m3!1d2929684.276498193!2d-102.8875395100283!3d44.186058794949!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!2m1!1s%20South%20Dakota%2083475!5e0!3m2!1sen!2sua!4v1696461737225!5m2!1sen!2sua'
        width='100%'
        height='450'
        loading='lazy'
        referrerPolicy='no-referrer-when-downgrade'></iframe>
    </section>
  );
}
