import React from 'react';

export default function Paragraph({ isVisible, toggle }) {
  return (
    <div>
      <button onClick={toggle}>Toggle Visibility</button>
      <p style={{ display: isVisible ? 'block' : 'none' }}>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Id numquam porro ut facere odio
        labore dolorum eligendi cumque optio. Ea eius, ipsum provident corrupti tenetur quisquam
        animi magni ipsa maiores.
      </p>
    </div>
  );
}
