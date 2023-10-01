'use client';
import axios, { AxiosError } from 'axios';
import { useRouter } from 'next/navigation';
import React, { useEffect, useState } from 'react';

export default function AccountLayout() {
  const router = useRouter();
  const [loading, setLoading] = useState(true);

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
    getUser();
  }, []);

  return loading && <p>fetching user....</p>;
}
