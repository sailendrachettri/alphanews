import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import Menu from '@mui/material/Menu';
import MenuIcon from '@mui/icons-material/Menu';
import Container from '@mui/material/Container';
import Tooltip from '@mui/material/Tooltip';
import MenuItem from '@mui/material/MenuItem';
import { Link } from 'react-router-dom';
import { Divider, Tab } from '@mui/material';
import MotionPhotosAutoIcon from '@mui/icons-material/MotionPhotosAuto';
import GitHubIcon from '@mui/icons-material/GitHub';
import { useState } from 'react';
import { blue } from '@mui/material/colors';

function Navbar() {
    // STATE VARIABLES
    const [anchorElNav, setAnchorElNav] = useState(null);

    // METHODS
    const handleOpenNavMenu = (event) => {
        setAnchorElNav(event.currentTarget);
    };

    const handleCloseNavMenu = () => {
        setAnchorElNav(null);
    };


    return (
        <AppBar position="static" sx={{ bgcolor: "whitesmoke", color: 'black' }}>
            <Container maxWidth="xl">
                <Toolbar disableGutters>
                    <MotionPhotosAutoIcon sx={{ display: { xs: 'none', md: 'flex' }, mr: 1, color: blue[800] }} fontSize='large' />
                    <Typography
                        variant="h6"
                        noWrap
                        component="a"
                        href="/"
                        sx={{
                            mr: 2,
                            display: { xs: 'none', md: 'flex' },
                            fontFamily: 'monospace',
                            fontWeight: 700,
                            letterSpacing: '.3rem',
                            color: blue[800],
                            textDecoration: 'none',
                        }}
                    >
                        ALPHA
                    </Typography>

                    <Box sx={{ flexGrow: 1, display: { xs: 'flex', md: 'none' } }}>
                        <IconButton
                            size="large"
                            aria-label="account of current user"
                            aria-controls="menu-appbar"
                            aria-haspopup="true"
                            onClick={handleOpenNavMenu}
                            color="inherit"
                        >
                            <MenuIcon />
                        </IconButton>
                        <Menu
                            id="menu-appbar"
                            anchorEl={anchorElNav}
                            anchorOrigin={{
                                vertical: 'bottom',
                                horizontal: 'left',
                            }}
                            keepMounted
                            transformOrigin={{
                                vertical: 'top',
                                horizontal: 'left',
                            }}
                            open={Boolean(anchorElNav)}
                            onClose={handleCloseNavMenu}
                            sx={{
                                display: { xs: 'flex', md: 'none' },
                            }}
                        >
                            <Box onClick={handleCloseNavMenu}>
                                <MenuItem><Tab label='Technology' to='/technology' component={Link} /></MenuItem>
                                <Divider />
                                <MenuItem><Tab label='Science' to='/Science' component={Link} /></MenuItem>
                                <Divider />
                                <MenuItem><Tab label='Entertainment' to='/entertainment' component={Link} /></MenuItem>
                                <Divider />
                                <MenuItem><Tab label='Health' to='/health' component={Link} /></MenuItem>
                                <Divider />
                                <MenuItem><Tab label='Sports' to='/sports' component={Link} /></MenuItem>
                                <Divider />
                                <MenuItem><Tab label='Business' to='/business' component={Link} /></MenuItem>
                            </Box>
                        </Menu>
                    </Box>

                    {/* Mobile view navbar */}
                    <MotionPhotosAutoIcon sx={{ display: { xs: 'flex', md: 'none' }, mr: 1, color: blue[800] }} />
                    <Typography
                        variant="h5"
                        noWrap
                        component="a"
                        href=""
                        sx={{
                            mr: 2,
                            display: { xs: 'flex', md: 'none' },
                            flexGrow: 1,
                            fontFamily: 'monospace',
                            fontWeight: 700,
                            letterSpacing: '.3rem',
                            color: blue[800],
                            textDecoration: 'none',

                        }}
                    >
                        ALPHA
                    </Typography>
                    <Box sx={{ flexGrow: 1, display: { xs: 'none', md: 'flex' } }}>
                        <Tab label='Technology' to='/technology' component={Link} />
                        <Tab label='Science' to='/Science' component={Link} />
                        <Tab label='Entertainment' to='/entertainment' component={Link} />
                        <Tab label='Health' to='/health' component={Link} />
                        <Tab label='Sports' to='/sports' component={Link} />
                        <Tab label='Business' to='/business' component={Link} />
                    </Box>


                    <Box sx={{ flexGrow: 0 }}>
                        <Tooltip title="Alpha News">
                            <IconButton sx={{ p: 0 }}>
                                <a href='https://github.com/sailendrachettri/alphanews' className='logoColor' target='_blank' rel="noreferrer">
                                    <GitHubIcon sx={{ display: { xs: 'none', md: 'flex' }, mr: 1, color: blue[800] }} fontSize='large' />
                                </a>
                            </IconButton>
                        </Tooltip>
                    </Box>
                </Toolbar>
            </Container>
        </AppBar>
    );
}
export default Navbar;
