import React, { useState, useEffect } from 'react';
import io from 'socket.io-client';


const socket = io.connect('http://localhost:3001');
const [socketMessage, setSocketMessage] = useState({});

const useSocket = (props) => {

  const handleSubmit = (e) => {
    e.preventDefault();
    e.target.reset();

    socket.emit('words', values);
  };
  
  useEffect( () => {
  
    socket.on('incoming', message => {
      setSocketMessage(message);
    });
  
  }, []);
  
  return (
    <>
      <pre>Socket Values: {JSON.stringify(socketMessage)}</pre>
    </>
  );
}


export default {useSocket, socket};