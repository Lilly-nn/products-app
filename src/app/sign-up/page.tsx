'use client';
import RegisterSection from '@/components/authorize/RegisterSection';
import SignInSection from '@/components/authorize/SignInSection';
import { useState } from 'react';

export default function SignUpPage() {
  const [page, setPage] = useState('login');

  return (
    <section className='authorize__section container'>
      <div className='authorize__content'>
        <h4 className='authorize__title'>{page === 'login' ? 'sign in' : 'create account'}</h4>
        {page === 'login' ? <SignInSection /> : <RegisterSection />}

        <div className='authorize__options'>
          {page === 'login' ? (
            <p>
              Don&#39;t have account? <span onClick={() => setPage('register')}>Register</span>
            </p>
          ) : (
            <p>
              Already have account? <span onClick={() => setPage('login')}>Login</span>
            </p>
          )}
        </div>
      </div>
    </section>
  );
}
