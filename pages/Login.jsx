import { useState } from "react";
import useAuth from "../src/hooks/useAuth";
import {
  Container,
  Paper,
  Button,
  Avatar,
  Typography,
  Box,
  TextField,
  FormControlLabel,
  Checkbox,
} from "@mui/material";
import LockOutlinedIcon from "@mui/icons-material/LockOutlined";
import { getAuth, signInWithEmailAndPassword } from "firebase/auth";

export default function Login() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const { userLoggedIn } = useAuth();
  const { login } = useAuth();

  const auth = getAuth();

  const handleLogin = async (e) => {
    e.preventDefault();
    console.log(e);
    //FIREBASE FUNCTIONS
    await signInWithEmailAndPassword(auth, username, password)
      .then((userCredential) => {
        // Signed in

        const user = userCredential.user;
        login(user);
        // ...
      })
      .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
        alert("Error Code" + errorCode + ": " + errorMessage);
      });
    // END FIREBASE FUNCTIONS

    //   if (username === "user" && password === "password") {
    //     // Replace with actual authentication logic
    //     await login({ username });
    //   } else {
    //     alert("Invalid username or password");
    //   }
  };

  return (
    <div>
      <Container maxWidth="s">
        <Paper elevation={10} sx={{ margin: 20, padding: 5 }}>
          <Avatar
            sx={{
              mx: "auto",
              bgcolor: "secondary.main",
              textAlign: "center",
              mb: 1,
            }}
          >
            <LockOutlinedIcon />
          </Avatar>
          <Typography component="h1" variant="h5" sx={{ textAlign: "center" }}>
            SignIn
          </Typography>
          <Box
            component="form"
            onSubmit={handleLogin}
            noValidate
            sx={{ mt: 1 }}
          >
            <TextField
              id="username"
              placeholder="Enter Username"
              fullWidth
              required
              onChange={(e) => setUsername(e.target.value)}
              autoFocus
              sx={{ mb: 2 }}
            />
            <TextField
              id="password"
              placeholder="Enter Password"
              fullWidth
              required
              onChange={(e) => setPassword(e.target.value)}
              type="password"
              sx={{ mb: 2 }}
            />
            <FormControlLabel
              control={<Checkbox value="remember" color="primary" />}
              label="Remember me"
            />
            <Button variant="contained" type="submit" fullWidth sx={{ mt: 1 }}>
              Sign In
            </Button>
          </Box>
        </Paper>
      </Container>
    </div>
  );
}
