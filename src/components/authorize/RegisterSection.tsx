'use client';
import { useState } from 'react';
import AuthorizeInput from '../inputs/AuthorizeInputs';
import Link from 'next/link';

export default function RegisterSection() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [acceptedTerms, setAcceptedTerms] = useState(false);

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
      <AuthorizeInput
        type='password'
        value={confirmPassword}
        setValue={setConfirmPassword}
        placeholder='Confirm Password'
      />

      <label className='flex items-center cursor-pointer text-sm'>
        <input
          readOnly
          className='checkbox'
          type='checkbox'
          onClick={() => setAcceptedTerms(!acceptedTerms)}
          checked={acceptedTerms}
          value='remember me'
        />
        <span>Accept all terms & Conditions</span>
      </label>
    </form>
  );
}
