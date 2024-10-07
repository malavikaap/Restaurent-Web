import React, { useState } from 'react';
import { styled } from '@mui/system';
import './Header.css';
import { Box, Typography } from '@mui/material';
import CustomButton from './CustomButton/CustomButton';
import logoImg from '../../assets/assets/logo.png';
import { useNavigate } from 'react-router-dom';

import MenuIcon from '@mui/icons-material/Menu';
import FeaturedPlayListIcon from '@mui/icons-material/MiscellaneousServices';
import MiscellaneousServicesIcon from '@mui/icons-material/MiscellaneousServices';
import HomeIcon from '@mui/icons-material/Home';
import ContactIcon from '@mui/icons-material/Contacts';
import {
  Drawer,
  List,
  ListItem,
  ListItemButton,
  ListItemIcon,
  ListItemText,
} from '@mui/material';

function Header() {
  const [mobileMenu, setmobileMenu] = useState({ left: false });

  const toggleDrawer = (anchor, open) => (event) => {
    if (event.type === 'keydown' && (event.key === 'Tab' || event.key === 'Shift')) {
      return;
    }
    setmobileMenu({ ...mobileMenu, [anchor]: open });
  };

  const list = (anchor) => (
    <Box
      sx={{
        width: anchor === 'top' || anchor === 'bottom' ? 'auto' : 250,
      }}
      role='presentation'
      onClick={toggleDrawer(anchor, false)}
      onKeyDown={toggleDrawer(anchor, false)}
    >
      <List>
        {nav_titles.map((item, index) => (
          <ListItem key={index} disablePadding onClick={()=>navigate(item.path)}>
            <ListItemButton>
              <ListItemIcon>
                {index === 0 && <HomeIcon />}
                {index === 1 && <FeaturedPlayListIcon />}
                {index === 2 && <MiscellaneousServicesIcon />}
                {index === 3 && <ContactIcon />}
              </ListItemIcon>
              <ListItemText primary={item.display} />
            </ListItemButton>
          </ListItem>
        ))}
      </List>
    </Box>
  );

  const nav_titles = [
    {
      path: '/',
      display: 'Home',
    },
    {
      path: '/dishes',
      display: 'Dishes',
    },
    {
      path: '/services',
      display: 'Services',
    },
    {
      path: '/aboutus',
      display: 'About Us',
    },
  ];

  const NavbarLinksBox = styled(Box)(({ theme }) => ({
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    gap: theme.spacing(3),
    [theme.breakpoints.down('md')]: {
      display: 'none',
    },
  }));

  const NavbarLink = styled(Typography)(() => ({
    fontSize: '15px',
    color: '#4f5361',
    fontWeight: 'bold',
    cursor: 'pointer',
    '&:hover': {
      color: '#fff',
    },
  }));

  const NavbarLogo = styled('img')(({ theme }) => ({
    cursor: 'pointer',
    [theme.breakpoints.down('md')]: {
      display: 'none',
    },
  }));

  const CustomMenuIcon = styled(MenuIcon)(({ theme }) => ({
    cursor: 'pointer',
    display: 'none',
    marginRight: theme.spacing(2),
    [theme.breakpoints.down('md')]: {
      display: 'block',
    },
  }));

  const navigate = useNavigate()

  return (
    <Box
      sx={{
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-between',
        padding: '40px',
        maxWidth: 'auto',
        backgroundColor: '#FED801',
        marginLeft: '0px',
        marginBottom: '-24px',
      }}
    >
      <Box
        sx={{
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          gap: '2.5rem',
        }}
      >
        <Box
          sx={{
            display: 'flex',
            alignItems: 'center',
          }}
        >
          <CustomMenuIcon onClick={toggleDrawer('left', true)} />
          <Drawer
            anchor='left'
            open={mobileMenu['left']}
            onClose={toggleDrawer('left', false)}
          >
            {list('left')}
          </Drawer>
          <NavbarLogo src={logoImg} />
        </Box>

        <NavbarLinksBox>
          {nav_titles.map((item, index) => (
            <NavbarLink key={index} variant='body2' onClick={()=>navigate(item.path)}>
              {item.display}
            </NavbarLink>
          ))}
        </NavbarLinksBox>
      </Box>
      <Box
        sx={{
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          gap: '1rem',
        }}
      >
        <NavbarLink variant='body2'>Sign Up</NavbarLink>
        <CustomButton backgroundColor='#0F1B4C' color='#fff' buttonText='Register' />
      </Box>
    </Box>
  );
}

export default Header;
