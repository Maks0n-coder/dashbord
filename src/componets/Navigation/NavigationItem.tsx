import { FC } from "react"
import { INavigationData } from "./navigationData"
import {
    ListItemIcon,
    ListItemText,
    styled,
} from '@mui/material';

interface NavigationItemProps extends INavigationData {
    collapsed?: boolean;
}

export const NavigationItem: FC<NavigationItemProps> = ({ nameLink, icon: IconComponent, collapsed }) => {

    const StyledListItemIcon = styled(ListItemIcon)({
        color: 'white',
        minWidth: '40px',
    });

    const StyledListItemText = styled(ListItemText)({
        '& .MuiTypography-root': {
            fontSize: '1rem',
        },
    });

    return (
        <>
            <StyledListItemIcon>
                <IconComponent />
            </StyledListItemIcon>
            {!collapsed && <StyledListItemText primary={nameLink} />}
        </>
    )
}