import * as React from 'react';
import Box from '@mui/material/Box';
import Link from '@mui/material/Link';
import AppBar from '../AppBar';
import Toolbar from '../Toolbar';
import Auth from '../../utils/auth';
<<<<<<< HEAD
=======

//Todo-we may need to use react -dom below link instead of the mui link.
//import { Link } from 'react-router-dom';
>>>>>>> 85264aa (changed file structure, added login and signup logic, separated client and server files,added dev invironment to root folder)

const rightLink = {
    fontSize: 16,
    color: 'common.white',
    ml: 3,
};

function NavBar() {
    const loggedIn = Auth.loggedIn();
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
<<<<<<< HEAD
                            href="/events/"
                            sx={{ rightLink }}
                        >
                            {'Events'}
                        </Link>
                        <Link
                            color="#f3a847"
                            variant="h6"
                            underline="none"
                            href="/login/"
=======
                            href="/login"
>>>>>>> 85264aa (changed file structure, added login and signup logic, separated client and server files,added dev invironment to root folder)
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
<<<<<<< HEAD
            </Toolbar>
=======
                    )}
                </Toolbar>
>>>>>>> 85264aa (changed file structure, added login and signup logic, separated client and server files,added dev invironment to root folder)
            </AppBar>
            <Toolbar />
        </div>
    );
}

export default NavBar;
