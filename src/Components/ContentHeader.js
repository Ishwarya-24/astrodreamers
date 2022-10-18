import * as React from 'react';
import PropTypes from 'prop-types';
import AppBar from '@mui/material/AppBar';
import Avatar from '@mui/material/Avatar';
import Button from '@mui/material/Button';
import Grid from '@mui/material/Grid';
import HelpIcon from '@mui/icons-material/Help';
import IconButton from '@mui/material/IconButton';
import Link from '@mui/material/Link';
import MenuIcon from '@mui/icons-material/Menu';
import NotificationsIcon from '@mui/icons-material/Notifications';
import Tab from '@mui/material/Tab';
import Tabs from '@mui/material/Tabs';
import Toolbar from '@mui/material/Toolbar';
import Tooltip from '@mui/material/Tooltip';
import Typography from '@mui/material/Typography';
import { UserContext } from '../UserContext';
import { Link as LinkComponent } from 'react-router-dom';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import { BorderBottom } from '@mui/icons-material';
import Box from '@mui/material/Box';




const lightColor = 'rgba(255, 255, 255, 0.7)';
const forms = ['Login','Register']
const fPaths = ['/login', '/registration']
const settings = ['Profile', 'Logout'];
const settingsPath = ['/profile']

function Header(props) {
  const { onDrawerToggle } = props;

  const { avatar, loggedIn,updateUser } = React.useContext( UserContext );

  const [anchorElNav, setAnchorElNav] = React.useState(null);
  const [anchorElUser, setAnchorElUser] = React.useState(null);

  const handleOpenNavMenu = (event) => {
    setAnchorElNav(event.currentTarget);
  };
  const handleOpenUserMenu = (event) => {
    setAnchorElUser(event.currentTarget);
  };

  const handleCloseNavMenu = () => {
    setAnchorElNav(null);
  };

  const handleCloseUserMenu = () => {
    setAnchorElUser(null);
  };

  function logoutAndCloseMenu() {

    // Clear the data from disk
    localStorage.clear();

    // Reset the UserContext component
    updateUser({})

    setAnchorElUser(null);
  }

  return (
    <React.Fragment>
      <AppBar color="primary" position="sticky" alignItems="center" elevation={0} 
      sx={{height: '61px',
      bgcolor: '#fff',
      borderBottom: '1px ',
      borderColor: '#e0e0e0',
      borderStyle: 'solid',
      borderLeft: 0,
      borderRight: 0,
      borderTop: 0,
      }}>
        
        <Toolbar>
          <Grid container spacing={1} alignItems="center" sx={{height: '61px'}}>
            <Grid sx={{ display: { sm: 'block', xs: 'block', md: 'none' }, }} item>
              <IconButton
                color="inherit"
                aria-label="open drawer"
                onClick={onDrawerToggle}
                edge="start"
              >
                <MenuIcon />
              </IconButton>
            </Grid>
            <Grid item xs />     
          </Grid>
          
          
          
          
          {/*AvatarIcon */}
          <Grid item>
          {
            loggedIn &&
            <Box sx={{ flexGrow: 0 }}>
              <Tooltip title="Open settings">
                <IconButton onClick={handleOpenUserMenu} sx={{ p: 0 }}>
                  <Avatar alt="Remy Sharp" src={avatar} />
                </IconButton>
              </Tooltip>
              <Menu
                sx={{ mt: '45px' }}
                id="menu-appbar"
                anchorEl={anchorElUser}
                anchorOrigin={{
                  vertical: 'top',
                  horizontal: 'right',
                }}
                keepMounted
                transformOrigin={{
                  vertical: 'top',
                  horizontal: 'right',
                }}
                open={Boolean(anchorElUser)}
                onClose={handleCloseUserMenu}
              >
                {settings.map((setting, i) => (
                  
                  setting === 'Logout' ? 
                  <MenuItem key={setting} onClick={logoutAndCloseMenu}>
                    <Typography textAlign="center">{setting}</Typography>
                  </MenuItem> :
                  <MenuItem key={setting} onClick={handleCloseUserMenu}>
                    <LinkComponent to={settingsPath[i]}>{setting}</LinkComponent>
                  </MenuItem>
                ))}
              </Menu>
            </Box> || 
            <Box sx={{ flexGrow: 0, display: { xs: 'none', md: 'flex' }, }}>
            {forms.map((page, i) => {
              console.log( page, loggedIn)
              if (((page === 'Login' || page === 'Register') && loggedIn === false) || page !== 'Login' && page !== 'Register' ){
                return(<Button
                  variant="outlined"
                  component={LinkComponent}
                  key={page}
                  to={fPaths[i]}
                  sx={{ my: 2, color: '#1976d2', display: 'block',mx: '5px',borderColor: '#e0e0e0',fontWeight: '600px' }}
                >
                  {page}
                </Button>)
              }
            })}
          </Box>
          }
            </Grid>
        </Toolbar>
      </AppBar>
      
      
    </React.Fragment>
  );
}

Header.propTypes = {
  onDrawerToggle: PropTypes.func.isRequired,
};

export default Header;