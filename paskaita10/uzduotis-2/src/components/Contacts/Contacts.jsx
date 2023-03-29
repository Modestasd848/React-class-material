import React, { useState } from 'react';

export default function Contacts() {
  const [isMessageVisible, setIsMessageVisible] = useState(false);
  function submitHandler(e) {
    e.preventDefault();
    setIsMessageVisible(true);
  }

  return (
    <div>
      <p>
        Phone: +3705346235 <br />
        Address: Some Street 10-20
      </p>
      <form>
        <label htmlFor="name">Name</label>
        <input type="text" id="name" /> <br />
        <label htmlFor="email">Email</label>
        <input type="text" id="email" /> <br />
        <label htmlFor="message">Message</label>
        <input type="text" id="message" /> <br />
        <button type="submit">Submit</button>
      </form>
      <p style={{ display: isMessageVisible ? 'block' : 'none' }}>Thank you for your message</p>
    </div>
  );
}
