import React from 'react';

export default function SignUp() {
  return (
    <form>
      <label htmlFor="name">Name</label> <br />
      <input type="text" id="name" /> <br />
      <label htmlFor="email">Email</label>
      <br />
      <input type="email" id="email" /> <br />
      <label htmlFor="password">Password</label>
      <br />
      <input type="password" id="password" /> <br />
      <button>Submit</button>
    </form>
  );
}
