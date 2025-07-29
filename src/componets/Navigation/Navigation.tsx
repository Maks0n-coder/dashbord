
import {
    Toolbar, Typography, List, IconButton, Drawer,
    ListItem,
    ListItemIcon,
    ListItemText,
} from '@mui/material';
import {
    Dashboard as DashboardIcon,
    BarChart as BarChartIcon,
    Assignment as AssignmentIcon,
    Email as EmailIcon,
    Person as PersonIcon,
    Settings as SettingsIcon,
    ExitToApp as ExitToAppIcon,
    Home as HomeIcon,
} from '@mui/icons-material';
import Link from 'next/link';
import { styled } from '@mui/material/styles';
import { drawerWidth } from '@/theme';


const StyledDrawer = styled(Drawer)({
    width: drawerWidth,
    flexShrink: 0,
    '& .MuiDrawer-paper': {
        width: drawerWidth,
        boxSizing: 'border-box',
        backgroundColor: '#222d32', // Dark background for the sidebar
        color: 'white',
    },
});

const StyledListItem = styled(ListItem)({
    paddingTop: '12px', // Increased padding
    paddingBottom: '12px', // Increased padding
    '&:hover': {
        backgroundColor: 'rgba(255, 255, 255, 0.08)', // Subtle hover effect
    },
});

const StyledListItemIcon = styled(ListItemIcon)({
    color: 'white',
});

const StyledListItemText = styled(ListItemText)({
    '& .MuiTypography-root': {
        fontSize: '1rem', // Slightly larger font size
    },
});

export const Navigation = () => {

    return (
        <StyledDrawer variant="permanent" anchor="left">
            <Toolbar sx={{
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                height: '64px', // Adjust height as needed
            }}
            >
                <HomeIcon sx={{ mr: 1, color: 'white' }} />
                <Typography variant="h6" noWrap color="white">
                    COMPANY LOGO
                </Typography>
            </Toolbar>
            <List>
                <StyledListItem key="Dashboard">
                    <StyledListItemIcon>
                        <DashboardIcon />
                    </StyledListItemIcon>
                    <StyledListItemText primary="Dashboard" />
                </StyledListItem>
                <StyledListItem key="Chart">
                    <StyledListItemIcon>
                        <BarChartIcon />
                    </StyledListItemIcon>
                    <StyledListItemText primary="Chart" />
                </StyledListItem>
                <Link href={'/form'}>
                    <StyledListItem key="Form">
                        <StyledListItemIcon>
                            <AssignmentIcon />
                        </StyledListItemIcon>
                        <StyledListItemText primary="Form" />
                    </StyledListItem>
                </Link>
                <StyledListItem key="Email">
                    <StyledListItemIcon>
                        <EmailIcon />
                    </StyledListItemIcon>
                    <StyledListItemText primary="Email" />
                </StyledListItem>
                <Link href={'/auth'}>
                    <StyledListItem key="Profil">
                        <StyledListItemIcon>
                            <PersonIcon />
                        </StyledListItemIcon>
                        <StyledListItemText primary="Profil" />
                    </StyledListItem>
                </Link>
                <StyledListItem key="Setting">
                    <StyledListItemIcon>
                        <SettingsIcon />
                    </StyledListItemIcon>
                    <StyledListItemText primary="Setting" />
                </StyledListItem>
                <StyledListItem key="Sign Out">
                    <StyledListItemIcon>
                        <ExitToAppIcon />
                    </StyledListItemIcon>
                    <StyledListItemText primary="Sign Out" />
                </StyledListItem>
            </List>
        </StyledDrawer>
    )
}