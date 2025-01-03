import React from 'react';
import { Container, Box, TextField, Button, Typography } from '@mui/material';

const Signup = () => {
    return (
        <Container
            maxWidth="sm"
            sx={{
                minHeight: "100vh",
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
                justifyContent: "center",
                bgcolor: "gray.100",
                p: 4,
            }}
        >
            <Typography variant="h4" component="h1" sx={{ mb: 3 }}>
                Signup
            </Typography>
            <Box component="form" sx={{ width: '100%' }}>
                <TextField
                    fullWidth
                    label="Username"
                    variant="outlined"
                    margin="normal"
                    required
                />
                <TextField
                    fullWidth
                    label="Email"
                    variant="outlined"
                    margin="normal"
                    required
                />
                <TextField
                    fullWidth
                    label="Password"
                    type="password"
                    variant="outlined"
                    margin="normal"
                    required
                />
                <Button
                    fullWidth
                    variant="contained"
                    color="primary"
                    sx={{ mt: 2 }}
                >
                    Signup
                </Button>
            </Box>
        </Container>
    );
}

export default Signup;