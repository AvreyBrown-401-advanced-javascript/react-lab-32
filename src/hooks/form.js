import React, {useState, useEffect} from 'react';
import Q from '@nmq/q/client';
import io from 'socket.io-client';
import socket from './socket';

const useForm = (props) => {

  const [values, setValues] = useState({});


  const handleSubmit = (e) => {
    e.preventDefault();
    e.target.reset();

    Q.publish('deeds', 'work', values);
    socket.emit('words', values);

  };
  
  const handleChange = e => {
    setValues({...values, [e.target.name]: e.target.value});
  };

  return (
    <>
      <pre>Form Values: {JSON.stringify(values)}</pre>
      <form onSubmit={handleSubmit}>
        <input name='firstName' placeholder="First Name" onChange={handleChange} />
        <input name='lastName' placeholder="Last Name" onChange={handleChange} />
        <button>Save</button>
      </form>
    </>
  );
}




export default useForm;