import { NewsCard } from './NewsCard'
import * as React from 'react';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';

export const CardsCollection = () => {
    return (
        <>
            <Grid container sx={{
                display: 'flex',
                justifyContent: 'center',
                alignItems: 'center',
            }}>
                <Box p={2}>
                    <NewsCard />
                </Box>
                <Box p={2}>
                    <NewsCard />
                </Box>
                <Box p={2}>
                    <NewsCard />
                </Box>
                <Box p={2}>
                    <NewsCard />
                </Box>
                <Box p={2}>
                    <NewsCard />
                </Box>
                <Box p={2}>
                    <NewsCard />
                </Box>
            </Grid>

        </>
    )
}
