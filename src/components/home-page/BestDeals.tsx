'use client';
import productImg from '@/../public/assets/best-deals1.png';
import productImg2 from '@/../public/assets/darling-oranges-1.webp';
import Image from 'next/image';
import { useEffect, useState } from 'react';
import ShopNowBtn from '../UI/ShopNowBtn';
import { getNextWeekInSeconds } from '@/utils/getNextWeek';

export default function BestDeals() {
  const [countdownInfo, setCountDownInfo] = useState({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0,
  });
  const { days, hours, minutes, seconds } = countdownInfo;
  const nextWeek = getNextWeekInSeconds();

  useEffect(() => {
    function updateCountdown() {
      const remainingDays = Math.floor(nextWeek / (3600 * 24));
      const remainingHours = Math.floor((nextWeek % (3600 * 24)) / 3600);
      const remainingMinutes = Math.floor((nextWeek % 3600) / 60);
      const remainingSeconds = Math.floor(nextWeek % 60);

      setCountDownInfo({
        days: remainingDays,
        hours: remainingHours,
        minutes: remainingMinutes,
        seconds: remainingSeconds,
      });
    }

    const intervalID = setInterval(updateCountdown, 1000);

    return () => {
      clearInterval(intervalID);
    };
  }, [nextWeek]);

  return (
    <div className='home__hot-deals'>
      <Image
        src={productImg}
        width={320}
        height={208}
        alt='product img'
        className='hot-deals__image'
      />
      <div className='hot-deals__section'>
        <div className='section__header'>
          <h6 className='subtitle'>Best Deals</h6>
          <h4 className='title'>Our Special Products Deal of the Month</h4>
          <div className='hot-deals__section'>
            <div className='countdown'>
              <div className='countdown__item'>
                <span className='value'>{days < 10 ? '0' + days : days}</span>
                <span className='text'>days</span>
              </div>
              <div className='countdown__item'>
                <span className='value'>{hours < 10 ? '0' + hours : hours}</span>
                <span className='text'>hours</span>
              </div>
              <div className='countdown__item'>
                <span className='value'>{minutes < 10 ? '0' + minutes : minutes}</span>
                <span className='text'>mins</span>
              </div>
              <div className='countdown__item'>
                <span className='value'>{seconds < 10 ? '0' + seconds : seconds}</span>
                <span className='text'>secs</span>
              </div>
            </div>
            <ShopNowBtn link={`/categories/groceries`} />
          </div>
        </div>
      </div>
      <Image
        src={productImg2}
        width={320}
        height={150}
        alt='product img'
        className='hot-deals__image'
      />
    </div>
  );
}
