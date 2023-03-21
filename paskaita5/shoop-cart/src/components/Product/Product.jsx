import React, { useState } from 'react';

export default function Product(props) {
  const { text, deleteProduct, index } = props;
  const [deleted, setDeleted] = useState(deleteProduct);

  return (
    <div>
      <p text></p>
    </div>
  );
}
