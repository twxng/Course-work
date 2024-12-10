import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import IconButton from '@mui/material/IconButton';
import Badge from '@mui/material/Badge';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import SearchIcon from '@mui/icons-material/Search';
import FavoriteIcon from '@mui/icons-material/Favorite';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import AccountCircle from '@mui/icons-material/AccountCircle';
import { useState } from 'react';
import { Link } from 'react-router-dom';
import { Box, Button } from '@mui/material';

const Header = ({ onLoginOpen, isLoggedIn, user, onLogout }) => {
    const [anchorEl, setAnchorEl] = useState(null);

    const handleMenu = (event) => setAnchorEl(event.currentTarget);
    const handleClose = () => setAnchorEl(null);



    return (
        <AppBar position="static" sx={{ backgroundColor: '#000' }}>
            <Toolbar>
                <Typography 
                    variant="h6" 
                    sx={{ flexGrow: 1, display: 'flex', alignItems: 'center', cursor: 'pointer' }}
                >
                    <Link to="/" style={{ display: 'flex', alignItems: 'center', color: 'white', textDecoration: 'none' }}>
                        <img 
                            src="././crossover.svg" 
                            alt="Logo" 
                            style={{ height: '40px', marginRight: '-8px' }} 
                        />
                        Crossover
                    </Link>
                </Typography>

                <Box sx={{ display: 'flex', gap: '1rem', marginRight: 'auto' }}>
                    <Button color="inherit" component={Link} to="/">Home</Button>
                    <Button color="inherit" component={Link} to="/catalog">Catalog</Button>
                </Box>

                <IconButton color="inherit">
                    <SearchIcon />
                </IconButton>
                <IconButton color="inherit">
                    <Badge badgeContent={0} color="secondary">
                        <FavoriteIcon />
                    </Badge>
                </IconButton>
                <IconButton color="inherit">
                    <Badge badgeContent={0} color="secondary">
                        <ShoppingCartIcon />
                    </Badge>
                </IconButton>
                <IconButton color="inherit" onClick={handleMenu}>
                    <AccountCircle />
                </IconButton>
                <Menu anchorEl={anchorEl} open={Boolean(anchorEl)} onClose={handleClose}>
                    {isLoggedIn ? (
                        <>
                            <MenuItem disabled>{user.email}</MenuItem>
														<MenuItem component={Link} to="/profile">Мій профіль</MenuItem>
                            <MenuItem onClick={onLogout}>Log out</MenuItem>
                        </>
                    ) : (
                        <>
                            <MenuItem onClick={onLoginOpen}>Увійти</MenuItem>
                        </>
                    )}
                </Menu>
            </Toolbar>
        </AppBar>
    );
};

export default Header;
