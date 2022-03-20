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
                    <Box sx={{ flex: 0, display: 'flex', justifyContent: 'flex-end' }} />
                    {Auth.loggedIn() ? (
                    <Link
                        variant="h6"
                        underline='none'
                        href="/"
                        sx={{ rightLink, color: 'inherit' }}
                    >
                        {'Home'}
                        
                    </Link>):(
                    <Box sx={{ flex: 1, display: 'flex', justifyContent: 'flex-end' }}>
                        
                        <Link
                            color="#f3a847"
                            variant="h6"
                            underline="none"
                            href="/login"
                            sx={{ rightLink }}
                        >
                            {'Signup'}
                        </Link>
                        
                        <Link
                            variant="h6"
                            underline="none"
                            href="/membership/"
                            sx={{ ...rightLink, color: 'inherit' }}
                        >
                            {'Become A Member'}
                        </Link>
                    </Box>
                    )}
                </Toolbar>
            </AppBar>
            <Toolbar />
        </div>
    );
}

export default NavBar;
