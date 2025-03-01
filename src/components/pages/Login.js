import React, { useState } from 'react';
import { Button, TextField, Container, Typography } from '@mui/material';
import { toast,ToastContainer } from 'react-toastify';
import { useNavigate } from "react-router";
import Cookies from "js-cookie";




const Login = () => {
  let navigate = useNavigate();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleSignIn = () => {
    
    if(!email){
        console.log("click1");
        
        toast.info("Please Enter Email")
    }
    else if(!password){
        toast.info("Please Enter the password")
    }
    else if(email==='user@gmail.com' && password==='1'){
        navigate('/task')
        Cookies.set("isAuth", "true", { expires: 1 }); // Expires in 1 day

    }
    else{
      toast.error("Invalid Credintals")

    }

  };

  return (
    <div style={{ marginTop: "10rem" }}>
      <Container maxWidth="xs">
        <Typography variant="h4" gutterBottom>
          Login
        </Typography>
        <TextField
          label="email"
          variant="outlined"
          fullWidth
          margin="normal"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        <TextField
          label="Password"
          type="password"
          variant="outlined"
          fullWidth
          margin="normal"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
        <Button
          variant="contained"
          color="primary"
          fullWidth
          onClick={handleSignIn}
        >
          Sign In
        </Button>
        <ToastContainer />
      </Container>
    </div>
  );
};

export default Login;
