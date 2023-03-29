import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { SignUpRequest } from '../../../api-calls/auth';

export default function RegistrationLayout() {
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [dateOfBirth, setDateOfBirth] = useState('');
  const [isRegistrationSuccessful, setRegistrationSuccessful] = useState(null);

  const navigate = useNavigate();

  function registrationUpdateHeading() {
    if (isRegistrationSuccessful === false) {
      return <h1>Registration Failure</h1>;
    }
  }

  async function submitHandler(e) {
    e.preventDefault();
    const body = {
      firstName,
      lastName,
      email,
      password,
      dateOfBirth,
    };

    const signUpResponse = await SignUpRequest(body);

    if (signUpResponse) {
      setFirstName('');
      setLastName('');
      setEmail('');
      setDateOfBirth('');
      setPassword('');

      navigate('/auth/sigin');
    }

    setRegistrationSuccessful(signUpResponse);
  }

  return (
    <form onSubmit={submitHandler}>
      <label htmlFor="firstName">First Name</label>
      <input
        type="text"
        id="firstName"
        value={firstName}
        onChange={(e) => setFirstName(e.target.value)}
      />
      <br />
      <label htmlFor="lastName">Last Name</label>
      <input
        type="text"
        id="lastName"
        value={lastName}
        onChange={(e) => setLastName(e.target.value)}
      />
      <br />
      <label htmlFor="email">Email</label>
      <input type="email" id="email" value={email} onChange={(e) => setEmail(e.target.value)} />
      <br />
      <label htmlFor="password">password</label>
      <input
        type="text"
        id="password"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
      />
      <br />
      <label htmlFor="dateOfBirth">dateOfBirth</label>
      <input
        type="date"
        id="dateOfBirth"
        value={dateOfBirth}
        onChange={(e) => setDateOfBirth(e.target.value)}
      />
      <br />
      <button type="submit">Register</button>
      <br />
      <Link to="/auth/signin">SignIn</Link>
      {registrationUpdateHeading()}
    </form>
  );
}
