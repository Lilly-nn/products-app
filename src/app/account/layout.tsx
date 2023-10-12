'use client';
import useCheckAuthorized from '@/hooks/useCheckUser';
import React from 'react';

export default function AccountLayout({ children }: { children: React.ReactNode }) {
  const { loading, error } = useCheckAuthorized();

  return loading ? (
    <p className='container'>fetching user....</p>
  ) : (
    !error && <div className='container'>{children}</div>
  );
}
