'use client';

import React, { useState } from 'react';
import {
    Toolbar, Typography, List, Drawer,
    ListItem,
    IconButton,
} from '@mui/material';
import {
    Home as HomeIcon,
    Close as CloseIcon,
    Menu as MenuIcon,
} from '@mui/icons-material';
import { styled } from '@mui/material/styles';
import { drawerWidth } from '@/theme';
import { NavigationItem } from './NavigationItem';
import { navigationData } from './navigationData';
import Link from 'next/link';

const collapsedDrawerWidth = 64; // Ширина свернутого drawer

const StyledDrawer = styled(Drawer, {
    shouldForwardProp: (prop) => prop !== 'collapsed',
})<{ collapsed?: boolean }>(({ theme, collapsed }) => ({
    width: collapsed ? collapsedDrawerWidth : drawerWidth,
    flexShrink: 0,
    transition: theme.transitions.create('width', {
        easing: theme.transitions.easing.sharp,
        duration: theme.transitions.duration.enteringScreen,
    }),
    '& .MuiDrawer-paper': {
        width: collapsed ? collapsedDrawerWidth : drawerWidth,
        boxSizing: 'border-box',
        backgroundColor: '#222d32', // Dark background for the sidebar
        color: 'white',
        transition: theme.transitions.create('width', {
            easing: theme.transitions.easing.sharp,
            duration: theme.transitions.duration.enteringScreen,
        }),
        overflowX: 'hidden',
    },
}));

const StyledListItem = styled(ListItem)({
    paddingTop: '12px', // Increased padding
    paddingBottom: '12px', // Increased padding
    '&:hover': {
        backgroundColor: 'rgba(255, 255, 255, 0.08)', // Subtle hover effect
    },
});



const ToggleButton = styled(IconButton)({
    position: 'absolute',
    top: '8px',
    right: '8px',
    color: 'white',
    '&:hover': {
        backgroundColor: 'rgba(255, 255, 255, 0.08)',
    },
});

export const Navigation = () => {
    const [collapsed, setCollapsed] = useState(false);

    const handleToggle = () => {
        setCollapsed(!collapsed);
    };

    return (
        <StyledDrawer variant="permanent" anchor="left" collapsed={collapsed}>
            <Toolbar sx={{
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                height: '64px', // Adjust height as needed
                position: 'relative',
            }}>
                {/*  <HomeIcon sx={{ mr: collapsed ? 0 : 1, color: 'white' }} /> */}
                {!collapsed && (
                    <Typography variant="h6" noWrap color="white">
                        LOGO
                    </Typography>
                )}
                <ToggleButton onClick={handleToggle} size="small">
                    {collapsed ? <MenuIcon /> : <CloseIcon />}
                </ToggleButton>
            </Toolbar>
            <List>
                {navigationData.map((item) => (
                    <Link key={item.key} href={item.path}>
                        <StyledListItem >
                            <NavigationItem collapsed={collapsed} {...item} />
                        </StyledListItem>
                    </Link>
                ))}
            </List>
        </StyledDrawer>
    );
};