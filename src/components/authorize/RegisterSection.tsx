'use client';
import { useState } from 'react';
import AuthorizeInput from '../inputs/AuthorizeInputs';
import Button from '../UI/button/Button';
import axios from 'axios';

export default function RegisterSection() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [acceptedTerms, setAcceptedTerms] = useState(false);
  const [passwordsMatch, setPasswordsMatch] = useState(true);

  async function saveUser(userData: Record<string, string>) {
    try {
      const res = await axios.post('/api/register', userData);
      alert(res.statusText);
    } catch (err: any) {
      alert(err.response.statusText);
    }
  }

  async function onSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    if (password !== confirmPassword) {
      setPasswordsMatch(false);
      return;
    }
    setPasswordsMatch(true);
    await saveUser({ email, password, confirmPassword });
  }

  return (
    <form onSubmit={onSubmit} className='authorize__content-inner'>
      <AuthorizeInput type='email' value={email.trim()} setValue={setEmail} placeholder='Email' />
      <AuthorizeInput
        type='password'
        value={password.trim()}
        setValue={setPassword}
        placeholder='Password'
      />
      {password.length < 8 && (
        <p className='text-sm text-gray-400'>Password should contain at least 8 characters</p>
      )}

      <AuthorizeInput
        type='password'
        value={confirmPassword.trim()}
        setValue={setConfirmPassword}
        placeholder='Confirm Password'
      />
      {!passwordsMatch && <p className='text-red-600'>Passwords should match</p>}

      <label className='flex items-center cursor-pointer text-sm'>
        <input
          onChange={(e) => setAcceptedTerms(e.target.checked)}
          className='checkbox'
          type='checkbox'
          checked={acceptedTerms}
          value='remember me'
        />
        <span>Accept all terms & Conditions</span>
      </label>
      <Button type='submit' disabled={!acceptedTerms} value='Create account' />
    </form>
  );
}
