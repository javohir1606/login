import React, { useState } from "react";
import { Button, TextField, Box } from "@mui/material";
import { request } from "../config/store";
import { useMutation } from "react-query";

export const LoginForm = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

  const mutation = useMutation(
    async (userData) => {
      const response = await request.post("login", userData);
      return response.data;
    },
    {
      onSuccess: (data) => {
        localStorage.setItem("userData", JSON.stringify(data));
        window.location.reload();
      },
      onError: (error) => {
        setError("Login failed. Please check your credentials.");
      },
    }
  );

  const handleLogin = (e) => {
    e.preventDefault();
    if (username && password) {
      mutation.mutate({ username, password });
    } else {
      setError("Please fill in all fields.");
    }
  };

  return (
    <Box component="form" onSubmit={handleLogin} sx={{ maxWidth: 400, mx: "auto", mt: 4 }}>
      <TextField
        label="Username"
        fullWidth
        margin="normal"
        value={username}
        onChange={(e) => setUsername(e.target.value)}
      />
      <TextField
        label="Password"
        type="password"
        fullWidth
        margin="normal"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
      />
      {error && <p style={{ color: "red" }}>{error}</p>}
      <Button type="submit" variant="contained" fullWidth>
        Login
      </Button>
    </Box>
  );
};
