'use client';
import { useState } from 'react';
import AuthorizeInput from '../inputs/AuthorizeInputs';
import Link from 'next/link';
import Button from '../UI/button/Button';

export default function SignInSection() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [makeSignedIn, setMakeSignedIn] = useState(false);

  function onSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
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
      <Button type='submit' value='Login' />
    </form>
  );
}
