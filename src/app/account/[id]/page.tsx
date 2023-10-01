'use client';
import axios, { AxiosError } from 'axios';
import { useParams } from 'next/navigation';
import React, { useEffect, useState } from 'react';

type UserType = {
  email: string;
  name?: string;
};

export default function AccountPage() {
  const params = useParams();
  const [user, setUser] = useState<UserType | null>(null);
  const [error, setError] = useState(false);
  const [loading, setLoading] = useState(true);

  async function loadUserInfo() {
    try {
      const { data } = await axios.post('/api/get-user', {
        id: params.id,
      });
      setUser(data);
    } catch (err) {
      setError(true);
    } finally {
      setLoading(false);
    }
  }

  useEffect(() => {
    loadUserInfo();
  }, []);

  if (loading) return <span>loading user info...</span>;

  return error ? (
    <span>An error happened...</span>
  ) : (
    <div className='mb-6'>Your account email: {user?.email}</div>
  );
}
