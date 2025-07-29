'use client';

/* import { cookies } from 'next/headers'; */
import { redirect } from 'next/navigation';
import React from 'react';
import { styled } from '@mui/material/styles';
import {
  Box,

  Toolbar,
  AppBar,
  Typography,
  InputBase,
  Card,
  CardContent,

} from '@mui/material';
import SearchIcon from '@mui/icons-material/Search';
import { drawerWidth } from '@/theme';
import { Navigation } from '@/componets/Navigation/Navigation';




const StyledAppBar = styled(AppBar)(({ theme }) => ({
  zIndex: theme.zIndex.drawer + 1,
  backgroundColor: '#f5f5f5', // Light grey background
  color: '#333', // Dark text color
  boxShadow: 'none', // Remove shadow
  borderBottom: '1px solid #ddd', // Add a subtle border
  marginLeft: drawerWidth, // Сдвигаем AppBar вправо
  width: `calc(100% - ${drawerWidth}px)`, // Уменьшаем ширину AppBar
}));

const StyledToolbar = styled(Toolbar)({
  display: 'flex',
  justifyContent: 'space-between',
});


const Search = styled('div')(({ theme }) => ({
  position: 'relative',
  borderRadius: theme.shape.borderRadius,
  backgroundColor: '#e0e0e0', // A lighter background color for the search bar
  '&:hover': {
    backgroundColor: '#d0d0d0', // Even lighter on hover
  },
  marginRight: theme.spacing(2),
  marginLeft: 0,
  width: '100%',
  [theme.breakpoints.up('sm')]: {
    marginLeft: theme.spacing(3),
    width: 'auto',
  },
}));

const SearchIconWrapper = styled('div')(({ theme }) => ({
  padding: theme.spacing(0, 2),
  height: '100%',
  position: 'absolute',
  pointerEvents: 'none',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  color: '#777', // Darker color for the search icon
}));

const StyledInputBase = styled(InputBase)(({ theme }) => ({
  color: 'inherit',
  '& .MuiInputBase-input': {
    padding: theme.spacing(1, 1, 1, 0),
    // vertical padding + font size from searchIcon
    paddingLeft: `calc(1em + ${theme.spacing(4)})`,
    transition: theme.transitions.create('width'),
    width: '100%',
    [theme.breakpoints.up('md')]: {
      width: '20ch',
    },
  },
}));


const StyledCard = styled(Card)({
  height: '100%', // Ensure cards take up full height of the grid cell
  display: 'flex',
  flexDirection: 'column',
});

const StyledCardContent = styled(CardContent)({
  flexGrow: 1, // Let the content grow to fill the space
});

export default function Home() {
  /* const isAuth = cookies().get('auth-token')?.value; */
  const isAuth = true

  // Если не авторизован — на /login
  if (!isAuth) {
    redirect('/login');
  }

  // Если авторизован — показываем Dashboard
  return (
    <Box sx={{ display: 'flex' }}>

      <Navigation />


      <Box component="main" sx={{ flexGrow: 1, p: 3, backgroundColor: '#f0f2f5', minHeight: '100vh' }}>
        <StyledAppBar position="fixed">
          <StyledToolbar>
            <Typography variant="h6" noWrap component="div">
              Dashboard
            </Typography>
            <Search>
              <SearchIconWrapper>
                <SearchIcon />
              </SearchIconWrapper>
              <StyledInputBase
                placeholder="Search…"
                inputProps={{ 'aria-label': 'search' }}
              />
            </Search>
          </StyledToolbar>
        </StyledAppBar>
        <Toolbar /> {/* Empty toolbar to offset content below AppBar */}
        <Box sx={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: 3 }}>
          {/* Example Cards (Just placeholders for the actual content) */}
          {[1, 2, 3, 4, 5, 6, 7, 8, 9].map((item) => (
            <StyledCard key={item}>
              <StyledCardContent>
                <Typography variant="h6" component="div">
                  Card {item}
                </Typography>
                <Typography variant="body2" color="text.secondary">
                  Some content for card {item}.
                </Typography>
              </StyledCardContent>
            </StyledCard>
          ))}
        </Box>
      </Box>
    </Box>
  );
}
