'use client';
import { useState } from 'react';
import AuthorizeInput from '../inputs/AuthorizeInputs';
import Link from 'next/link';
import Button from '../UI/button/Button';
import axios from 'axios';

export default function SignInSection() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [loading, setLoading] = useState(false);
  const [makeSignedIn, setMakeSignedIn] = useState(false);

  async function login(userData: Record<string, string>) {
    setLoading(true);
    try {
      const res = await axios.post('/api/sign-in', userData);
      console.log(res.data);
      if (res.status === 200 && res.data) {
        alert('you are signed in');
      }
    } catch (err: any) {
      alert(err.response.statusText);
    } finally {
      setLoading(false);
    }
  }
  async function onSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    if (!email.trim() || !password) {
      alert('Fill out all of the fields!');
      return;
    }
    await login({ email, password });
  }

  return (
    <form onSubmit={onSubmit} className='authorize__content-inner'>
      <AuthorizeInput type='email' value={email} setValue={setEmail} placeholder='Email' />
      <AuthorizeInput
        type='password'
        value={password}
        setValue={setPassword}
        placeholder='Password'
      />

      <div className='flex justify-between mt-4 text-sm'>
        <label className='flex items-center cursor-pointer'>
          <input
            readOnly
            className='checkbox'
            type='checkbox'
            onClick={() => setMakeSignedIn(!makeSignedIn)}
            checked={makeSignedIn}
            value='remember me'
          />
          <span>Remember me</span>
        </label>
        <Link href='/forgot-password'>Forgot Password</Link>
      </div>
      <Button type='submit' disabled={loading} value={loading ? 'Loading...' : 'Login'} />
    </form>
  );
}
