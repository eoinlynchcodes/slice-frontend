import React from 'react';
import { TextField, Button, Container, Typography } from '@mui/material';

const Login = () => {
    return (
        <Container maxWidth="xs">
            <Typography variant="h4" component="h1" gutterBottom>
                Login
            </Typography>
            <form noValidate autoComplete="off">
                <TextField
                    label="Username"
                    variant="outlined"
                    fullWidth
                    margin="normal"
                />
                <TextField
                    label="Password"
                    type="password"
                    variant="outlined"
                    fullWidth
                    margin="normal"
                />
                <Button variant="contained" color="primary" fullWidth>
                    Submit
                </Button>
            </form>
        </Container>
    );
}

export default Login;
