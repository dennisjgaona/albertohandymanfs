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

export default function Login() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const { login } = useAuth();

  const handleLogin = async (e) => {
    e.preventDefault();
    console.log(e);
    // Here you would usually send a request to your backend to authenticate the user
    // For the sake of this example, we're using a mock authentication
    if (username === "user" && password === "password") {
      // Replace with actual authentication logic
      await login({ username });
    } else {
      alert("Invalid username or password");
    }
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
