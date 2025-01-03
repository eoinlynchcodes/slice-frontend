import React from "react";
import { Box, Typography, TextField, Button, Container, ButtonGroup } from "@mui/material";
import { useNavigate } from "react-router-dom";

const Home = () => {

    const navigate = useNavigate();

    const handleLoginClick = () => {
        navigate("/login");
    };

    const handleSignupClick = () => {
        navigate("/signup");
    };

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
            {/* <Typography
        variant="h1"
        component="h1"
        sx={{ fontSize: "2.5rem", fontWeight: "bold", color: "gray.800", mb: 3 }}
      >
        Home
      </Typography> */}
            <ButtonGroup>
                <Button onClick={handleLoginClick}>Login</Button>
                <Button onClick={handleSignupClick} >Sign up</Button>
            </ButtonGroup>
            <Typography
                variant="body1"
                sx={{ fontSize: "1.25rem", color: "gray.600", mb: 3, textAlign: "center" }}
            >
                Explain what's going on here.
            </Typography>
            <Box sx={{ position: "relative", width: "100%" }}>
                <TextField
                    fullWidth
                    placeholder="Search..."
                    variant="outlined"
                    sx={{
                        borderRadius: 1,
                        backgroundColor: "white",
                        boxShadow: 1,
                    }}
                />
                <Button
                    variant="contained"
                    color="primary"
                    sx={{
                        position: "absolute",
                        right: "8px",
                        top: "50%",
                        transform: "translateY(-50%)",
                        px: 3,
                        py: 1,
                    }}
                >
                    Search
                </Button>
            </Box>
        </Container>
    );
};

export default Home;