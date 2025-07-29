'use client';

import { ThemeProvider } from '@mui/material/styles';
import CssBaseline from '@mui/material/CssBaseline';
import theme from '../theme';
import { usePathname } from 'next/navigation';
import { ReactNode } from 'react';

const ThemeRegistry = ({ children }: { children: ReactNode }) => {

    const pathname = usePathname();

    console.log(pathname);
    return (
        <ThemeProvider theme={theme}>
            <CssBaseline />
            {children}
        </ThemeProvider>
    );
}

export default ThemeRegistry