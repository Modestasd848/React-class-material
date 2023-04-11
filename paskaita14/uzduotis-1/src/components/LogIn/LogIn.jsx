import React from 'react';

export default function LogIn() {
  return (
    <form>
      <label htmlFor="email">Email</label>
      <br />
      <input type="text" id="email" /> <br />
      <label htmlFor="password"> Password</label>
      <br />
      <input type="password" /> <br />
      <button>Submit</button>
    </form>
  );
}
