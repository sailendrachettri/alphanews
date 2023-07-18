import { Box, Typography } from '@mui/material';
import MotionPhotosAutoIcon from '@mui/icons-material/MotionPhotosAuto';
import React from 'react';

export default function Footer() {
    let year = new Date().getFullYear();

    return (
        <>
            <Box sx={{
                display: "flex",
                alignItems: "center",
                justifyContent: 'space-around',
                padding: 3,
                bgcolor: 'whitesmoke',

            }}>
                <Box>
                    <Typography> Copyright © {year} </Typography>
                    <a href="https://www.instagram.com/01_sailendra" style={{ textDecoration: 'none', color: "#050417" }}> <Typography sx={{ fontWeight: 'bold' }} fontSize='large'> Sailendra Chettri</Typography></a>
                </Box>
                <MotionPhotosAutoIcon fontSize='large' />

            </Box>

        </>
    );
}