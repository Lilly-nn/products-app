import { feedbacks } from '@/info/feedback';
import { calculateRating } from '@/utils/calculateRating';
import Image from 'next/image';

export default function ClientFeedback() {
  return (
    <section className='home__testemonials'>
      <div className='section__header'>
        <h6 className='subtitle'>Client Testimonial</h6>
        <h4 className='title'>What our Client Says</h4>
        <div className='testemonials__section'>
          {feedbacks.map((feedback) => (
            <div key={feedback.author} className='feedback__card'>
              <Image src='/assets/quotes.svg' width={32} height={26} alt='quote' />
              <p className='feedback__content'>
                Pellentesque eu nibh eget mauris congue mattis mattis nec tellus. Phasellus
                imperdiet elit eu magna dictum, bibendum cursus velit sodales. Donec sed neque eget
              </p>
              <div className='feedback__info'>
                <div className='flex items-center gap-x-3'>
                  <Image
                    className='feedback__img'
                    src={feedback.img}
                    height={56}
                    width={56}
                    alt='customer image'
                  />
                  <div>
                    <span className='feedback__author'>{feedback.author}</span>
                    <p className='feedback__role'>Customer</p>
                  </div>
                </div>
                <div className='feedback__rating'> {calculateRating(feedback.rating)}</div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
