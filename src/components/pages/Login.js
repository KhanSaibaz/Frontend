import React, { useState } from 'react';
import { Button, TextField, Container, Typography } from '@mui/material';
import { toast, ToastContainer } from 'react-toastify';
import { useNavigate } from "react-router";
import Cookies from "js-cookie";
import { useLoginMutation } from '../redux/slices/loginSlice'
import { useDispatch } from "react-redux";
import { setToken } from '../redux/slices/authSlice'



const Login = () => {
  let navigate = useNavigate();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [login, { isLoading, isError, error, data }] = useLoginMutation();
  const dispatch = useDispatch();


  const handleSignIn = async () => {

    if (!email) {
      console.log("click1");

      toast.info("Please Enter Email")
    }
    else if (!password) {
      toast.info("Please Enter the password")
    }
    else {
      const creditanils = {
        email: email,
        password: password
      }
      const reposnse = await login(creditanils)
      console.log(reposnse)
      if (reposnse?.data?.message == 'Login successful') {
        dispatch(setToken(reposnse?.data?.token))
        toast.success(reposnse?.data?.message)
        navigate('/task')
      }
      else{
        toast.error(reposnse?.error?.data?.message)
      }
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
