import * as React from 'react';
import { Link as LinkComponent } from 'react-router-dom';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import Menu from '@mui/material/Menu';
import MenuIcon from '@mui/icons-material/Menu';
import Container from '@mui/material/Container';
import Avatar from '@mui/material/Avatar';
import Button from '@mui/material/Button';
import Tooltip from '@mui/material/Tooltip';
import MenuItem from '@mui/material/MenuItem';
import AdbIcon from '@mui/icons-material/Adb';
import { UserContext } from '../UserContext'



const forms = ['Login','Register']
const fPaths = ['/login', '/registration']
const pages = ['Home','About','Contact','Docs' ];
const paths = ['/','/about','/contact','/Docs' ];

const settings = ['Profile', 'Logout'];
const settingsPath = ['/profile']

const ResponsiveAppBar = () => {


  const { avatar, loggedIn, updateUser } = React.useContext( UserContext );

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
    updateUser({loggedIn: false})

    setAnchorElUser(null);
  }

  return (
    <AppBar position="static">
      <Container maxWidth="xl">
        <Toolbar disableGutters>
        <img src="https://raw.githubusercontent.com/MohamedSamir-Gad/AstroDreamers/main/logo.png" 
           className="bi me-2"
           width="60" 
           alt="easy learnig with a blue dolphin logo "
           height="60"
           ></img>
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
              color: 'inherit',
              textDecoration: 'none',
            }}
          >
            EASY lEARNING
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
                display: { xs: 'block', md: 'none' },
              }}
            >
              {pages.map((page, i) => {
                  
                  if ((page === 'Login' && loggedIn === false) || page !== 'Login' ) {
                    return(
                      <MenuItem key={page} onClick={handleCloseNavMenu}>
                        <LinkComponent to={paths[i]} textAlign="center">{page}</LinkComponent>
                      </MenuItem>
                    )
                  }
        
              }
              )}
            </Menu>
          </Box>
          <AdbIcon sx={{ display: { xs: 'flex', md: 'none' }, mr: 1 }} />
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
              color: 'inherit',
              textDecoration: 'none',
            }}
          >
            LOGO
          </Typography>
          <Box sx={{ flexGrow: 1, display: { xs: 'none', md: 'flex' } }}>
            {pages.map((page, i) => {
              console.log( page, loggedIn)
              if (((page === 'Login' || page === 'Register') && loggedIn === false) || page !== 'Login' && page !== 'Register' ){
                return(<Button
                  component={LinkComponent}
                  key={page}
                  to={paths[i]}
                  sx={{ my: 2, color: 'white', display: 'block' }}
                >
                  {page}
                </Button>)
              }
            })}
          </Box>

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
            <Box sx={{ flexGrow: 0, display: { xs: 'none', md: 'flex' } }}>
            {forms.map((page, i) => {
              console.log( page, loggedIn)
              if (((page === 'Login' || page === 'Register') && loggedIn === false) || page !== 'Login' && page !== 'Register' ){
                return(<Button
                  component={LinkComponent}
                  key={page}
                  to={fPaths[i]}
                  sx={{ my: 2, color: 'white', display: 'block' }}
                >
                  {page}
                </Button>)
              }
            })}
          </Box>
          }



        </Toolbar>
      </Container>
    </AppBar>
  );
};
export default ResponsiveAppBar;