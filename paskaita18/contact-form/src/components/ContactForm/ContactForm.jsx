import React, { useState } from 'react';
import TextInput from '../TextInput/TextInput';
import Label from '../Label/Label';
import Button from '../Button/Button';
import PropTypes from 'prop-types';

export default function ContactForm() {
  const [name, setName] = useState('');
  const [userName, setUserName] = useState('');
  const [email, setEmail] = useState('');

  const [correctName, setCorrectName] = useState(true);
  const [correctUserName, setCorrectUserName] = useState(true);
  const [correctEmail, setCorrectEmail] = useState(true);

  function formSubmitHandler(e) {
    e.preventDefault();
    console.log(name, userName, email);
  }

  return (
    <form onSubmit={formSubmitHandler}>
      <Label name="Name" />
      <TextInput
        updateState={setName}
        type="text"
        placeholder="Text input"
        value={name}
        style={{
          border:
            name.length === 0
              ? '1px solid black'
              : correctName
              ? '1px solid green'
              : '1px solid red',
          outline: 'none',
        }}
        checkIfCorrect={setCorrectName}
      />
      <Label name="Username" />
      <TextInput
        updateState={setUserName}
        type="text"
        placeholder="Text input"
        value={userName}
        style={{
          border:
            name.length === 0
              ? '1px solid black'
              : correctUserName
              ? '1px solid green'
              : '1px solid red',
          outline: 'none',
        }}
        checkIfCorrect={setCorrectUserName}
      />
      <Label name="Email" />
      <TextInput
        updateState={setEmail}
        type="email"
        placeholder="Email input"
        value={email}
        style={{
          border:
            name.length === 0
              ? '1px solid black'
              : correctEmail
              ? '1px solid green'
              : '1px solid red',
          outline: 'none',
        }}
        checkIfCorrect={setCorrectEmail}
      />
      <Label name="Message" />
      <select>
        <option value="option1">Option1</option>
        <option value="option2">Option2</option>
        <option value="option3">Option3</option>
      </select>
      <Label name="Message" />
      <textarea />
      <br />
      <input type="checkbox" id="check" />
      <label htmlFor="check">I agree to the terms and conditions</label>
      <br />
      <Button name="Submit" type="submit" />
      <Button name="Cancel" type="reset" />
    </form>
  );
}

ContactForm.defaultProps = {
  name: '',
  userName: '',
  email: '',
};

ContactForm.propTypes = {
  name: PropTypes.string.isRequired,
  userName: PropTypes.string.isRequired,
  email: PropTypes.string.isRequired,
};
