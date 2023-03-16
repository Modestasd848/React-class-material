import React, { useState } from 'react';

export default function MoodeChecker() {
  const [message, setMessage] = useState('Kaip jauciates?');

  return (
    <div>
      <h2>{message}</h2>
      <button onClick={() => setMessage('Nieko tokio, viskas bus gerai')}>
        {'Jauciuosi prastai :( '}
      </button>
      <button onClick={() => setMessage('Gerai, nujauciu, kad greitu metu jausites puikiai')}>
        Jauciuosi normaliai : |
      </button>
      <button onClick={() => setMessage('Smagu girdeti, taip ir toliau')}>
        {'Jauciuosi puikiai :)'}
      </button>
    </div>
  );
}
