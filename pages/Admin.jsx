import React from "react";
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

export default function Admin() {
  const { logout } = useAuth();

  const handleLogout = () => {
    logout();
  };
  return (
    <>
      <div>
        <Container maxWidth="s">
          <Paper elevation={10} sx={{ margin: 20, padding: 5 }}>
            <Typography
              component="h1"
              variant="h5"
              sx={{ textAlign: "center" }}
            >
              Add Photos
            </Typography>
            <Button
              variant="contained"
              onClick={handleLogout}
              fullWidth
              sx={{ mt: 1 }}
            >
              Logout
            </Button>
          </Paper>
        </Container>
      </div>
    </>
  );
}
