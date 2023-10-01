'use client';
import { useTypedSelector } from '@/hooks/useTypedSelector';
import axios, { AxiosError } from 'axios';
import { useRouter } from 'next/navigation';
import React, { useEffect, useState } from 'react';

export default function AccountLayout({ children }: { children: React.ReactNode }) {
  const router = useRouter();
  const { isAuthorized } = useTypedSelector((state) => state.user);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);

  async function getUser() {
    try {
      const { data } = await axios.get('/api/check-auth');
      return {
        user: data,
        error: null,
      };
    } catch (err) {
      const error = err as AxiosError;
      if (error) {
        setError(true);
        localStorage.removeItem('user_id');
        router.push('/sign-up');
      }
      return {
        user: null,
        error,
      };
    } finally {
      setLoading(false);
    }
  }

  useEffect(() => {
    const userId = localStorage.getItem('user_id');
    if (!userId && !isAuthorized) {
      router.push('/sign-up');
      return;
    }
    getUser();
  }, []);

  return loading ? (
    <p className='container'>fetching user....</p>
  ) : (
    !error && <div className='container'>{children}</div>
  );
}
