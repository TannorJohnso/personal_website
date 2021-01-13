import React, { useState, useEffect } from 'react';
import MyEmail from './email';
import { renderEmail } from 'react-html-email';
import axios from 'axios';
import './styles.css';

const Footer = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [reason, setReason] = useState('');
  const [data, setData] = useState([]);

  // useEffect(() => {
  //   callBackendAPI()
  //     .then((res) => setData(res.express))
  //     .catch((err) => console.log(err));
  // }, []);

  // const callBackendAPI = async () => {
  //   const response = await fetch('/express_backend');
  //   const body = await response.json();

  //   if (response.status !== 200) {
  //     throw Error(body.message);
  //   }
  //   return body;
  // };

  const handleSubmit = (event) => {
    const messageHtml = renderEmail(
      <MyEmail className={name}>{reason}</MyEmail>
    );

    axios({
      method: 'POST',
      url: 'http://localhost:5000/send',
      params: {
        name: name,
        email: email,
        messageHtml: messageHtml,
      },
    })
      .then((response) => {
        alert('.then statment');
        if (response.data.msg === 'success') {
          alert('Email sent, awesome!');
          this.resetForm();
        } else if (response.data.msg === 'fail') {
          alert('Oops, something went wrong. Try again');
        }
      })
      .catch((err) => console.log(err));
  };

  return (
    <div className="footer">
      {data}
      <br />
      Contact Me
      {console.log(process.env)}
      <form onSubmit={(event) => handleSubmit(event)}>
        <label>
          Name:{' '}
          <input
            name="name"
            type="text"
            value={name}
            onChange={(e) => {
              setName(e.target.value);
            }}
          />
        </label>
        <br />
        <label>
          Email:{' '}
          <input
            name="email"
            type="text"
            value={email}
            onChange={(e) => {
              setEmail(e.target.value);
            }}
          />
        </label>
        <br />
        <label>
          Reason For Reaching Out:
          <textarea
            name="reasonForEmail"
            value={reason}
            onChange={(e) => {
              setReason(e.target.value);
            }}
          />
        </label>
        <input type="submit" value="Submit" />
      </form>
    </div>
  );
};

export default Footer;
