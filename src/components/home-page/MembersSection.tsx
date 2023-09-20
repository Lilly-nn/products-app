import { members } from '@/info/team';
import Image from 'next/image';
import objj from '../../../public/assets/social-media/instagram 1.svg';
import Link from 'next/link';

export default function MembersSection() {
  return (
    <section className='home__products'>
      <div className='section__header'>
        <h6 className='subtitle'>Team</h6>
        <h4 className='title'>Our Professional Members</h4>
        <div className='members__section'>
          {members.map((member) => (
            <div className='member' key={member.name}>
              <div className='member__img-mask'>
                <Image
                  className='member__img'
                  width={312}
                  height={280}
                  alt={member.name + 'photo'}
                  src={member.img}
                />
                <div className='member__social'>
                  <Link href='/' className='icon'>
                    <Image
                      src='assets/social-media/facebook 1.svg'
                      width={20}
                      height={20}
                      alt='facebook icon'
                    />
                  </Link>
                  <Link href='/' className='icon'>
                    <Image
                      src='assets/social-media/twitter 1.svg'
                      width={20}
                      height={20}
                      alt='twitter icon'
                    />
                  </Link>
                  <Link href='/' className='icon'>
                    <Image
                      src='assets/social-media/pinterest.svg'
                      width={20}
                      height={20}
                      alt='pinterest icon'
                    />
                  </Link>
                  <Link href='/' className='icon'>
                    <Image
                      src='assets/social-media/instagram 1.svg'
                      width={20}
                      height={20}
                      alt='instagram icon'
                    />
                  </Link>
                </div>
              </div>

              <span className='member__title'>{member.name}</span>
              <p className='member__job'>{member.job}</p>
              <div>
                <Image src={objj} alt='fd' />
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
