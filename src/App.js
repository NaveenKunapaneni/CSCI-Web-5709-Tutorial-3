import React, { useState } from 'react';
import './App.css';
import Register from './components/Register';
import Navbar from './components/Navbar';
import Box from '@mui/material/Box';
import Profilepage from './components/Profilepage.js';

function App() {

  const [firstname, setFirstname] = useState("");
  const [lastname, setLastname] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");  //eslint-disable-line
  const [isLoggedIn, setLoggedIn] = useState(false);

  return (
      <Box>
        <Navbar isLoggedIn={isLoggedIn}/>
        {isLoggedIn ? <Profilepage firstname={firstname}
                                    lastname={lastname}
                                    email={email} 
                                    /> : 
          (
          <Register setFirstname={setFirstname} 
                  setLastname={setLastname} 
                  setEmail={setEmail} 
                  setPassword={setPassword} 
                  setLoggedIn={setLoggedIn}
        />
        )}

      </Box>
  );
}

export default App;
