import React from 'react';

import Socket from './hooks/socket';
import Q from './hooks/q';
import Form from './hooks/form';

function App() {
  return (
    <>
    <Form/>
    <Q />
    <Socket />
    </>
  );
}

export default App;