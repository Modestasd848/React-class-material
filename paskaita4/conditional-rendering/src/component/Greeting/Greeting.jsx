import React, { useState } from 'react';
import Button from './Button/Button';

export default function Greeting(props) {
  const [loggedIn, setLoggedIn] = useState(false);
  return (
    <div>
      {loggedIn ? (
        <p>You are logged in</p>
      ) : (
        <div>
          <p>please log in to view this page</p>
          <Button buttonHandler={setLoggedIn} />
        </div>
      )}
    </div>
  );
}
