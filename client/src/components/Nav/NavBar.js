import * as React from 'react';
import Box from '@mui/material/Box';
import Link from '@mui/material/Link';
import AppBar from './AppBar';
import Toolbar from '../Toolbar';
import Auth from '../../utils/auth';

//Todo-we may need to use react -dom below link instead of the mui link.
//import { Link } from 'react-router-dom';

const rightLink = {
    fontSize: 16,
    color: 'common.white',
    ml: 3,
};

function NavBar() {
    return (
        <div>
            <AppBar position="fixed">
                <Toolbar sx={{ justifyContent: 'space-between' }}>
                    <Box sx={{ flex: 1, display: 'flex', justifyContent: 'flex-start' }}>
                    <Link
                        variant="h6"
                        underline="none"
                        href="/"
                        sx={{ color: 'inherit'}}
                    >
                        {'Home'}
                    </Link>
                    <Link
                        variant="h6"
                        underline="none"
                        href="/about"
                        sx={{ ...rightLink, color: 'inherit' }}
                    >
                        {'About us'}
                    </Link>
                        <Link
                            variant="h6"
                            underline="none"
                            href="/culture"
                            sx={{ ...rightLink, color: 'inherit' }}
                        >
                            {'Culture'}
                        </Link>
                        <Link
                            variant="h6"
                            underline="none"
                            href="/membership"
                            sx={{ ...rightLink, color: 'inherit' }}
                        >
                            {'Membership'}
                        </Link>
                        <Link
                            variant="h6"
                            underline="none"
                            href="/events"
                            sx={{ ...rightLink, color: 'inherit' }}
                        >
                            {'events'}
                        </Link>
                </Box>
                    <Box sx={{ flex: 1, display: 'flex', justifyContent: 'flex-end' }}>
                        
                        <Link
                            color="#f3a847"
                            variant="h6"
                            underline="none"
                            href="/signup"
                            
                        >
                            {'Sign up'}
                        </Link>
                        |
                        <Link
                            color="#f3a847"
                            variant="h6"
                            underline="none"
                            href="/login"
                        >
                            {'log in'}
                        </Link>
                    </Box>
                </Toolbar>
            </AppBar>
            <Toolbar />
        </div>
    );
}

export default NavBar;
