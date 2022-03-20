import * as React from 'react';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import Link from '@mui/material/Link';
import Container from '@mui/material/Container';
import Typography from '../Typography';
import TextField from '../TextField';

//We may have to replace Link import with below import to properly link our pages
//import { Link } from 'react-router-dom';

import {
  FacebookIcon,
  InstapaperIcon,
  EmailIcon,
  WhatsappIcon,
  LinkedinIcon,
} from "react-share";

function Copyright() {
  return (
    <React.Fragment>
      {'© '}
      <Link color="inherit" href="/">
        SoCal Tanzanian Community
      </Link>{'/'}
      {new Date().getFullYear()}
    </React.Fragment>
  );
}

const iconStyle = {
  width: 48,
  height: 48,
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  backgroundColor: 'warning.main',
  mr: 1,
  '&:hover': {
    bgcolor: 'warning.dark',
  },
};

const LANGUAGES = [
  {
    code: 'en-US',
    name: 'English',
  },
];

export default function Footer() {
  return (
    <Typography
      component="footer"
      sx={{ display: 'flex', bgcolor: 'secondary.light' }}
    >
      <Container sx={{ my: 8, display: 'flex' }}>
        <Grid container>
          <Grid item xs={6} sm={4} md={3}>
            <Grid
              container
              direction="column"
              justifyContent="flex-end"
              sx={{ height: 120 }}
            >
              <Grid item sx={{ display: 'flex' }}>
                <Box component="a" href="https://m.facebook.com/groups/963510197456249?group_view_referrer=profile_browser" sx={iconStyle}>
                  <FacebookIcon size={36} />
                </Box>
                <Box component="a" href="https://instagram.com/socal_tanzanian_community?igshid=1gqnfxb59dvh3" sx={iconStyle}>
                  <InstapaperIcon size={36} />
                </Box>
                <Box component="a" href="https://chat.whatsapp.com/IDPdLOsAEpL4a5k9ORk3AE" sx={iconStyle}>
                  <WhatsappIcon size={36} />
                </Box>
                <Box component="a" href="#contact" sx={iconStyle}>
                  <EmailIcon size={36} />
                  <Link href="/contact/"></Link> 
                </Box>
              </Grid>
              <Grid item>
                <Copyright />
              </Grid>
            </Grid>
          </Grid>
          <Grid item xs={6} sm={4} md={2}>

          </Grid>
          <Grid item xs={6} sm={8} md={4}>
            <Typography variant="h6" marked="left" gutterBottom>
              Language
            </Typography>
            <TextField
              select
              size="medium"
              variant="standard"
              SelectProps={{
                native: true,
              }}
              sx={{ mt: 1, width: 150 }}
            >
              {LANGUAGES.map((language) => (
                <option value={language.code} key={language.code}>
                  {language.name}
                </option>
              ))}
            </TextField>
          </Grid>

          <Grid item>
            SoCal Tanzanian community (Entity Number: C4564114) is a registered nonprofit membership organization, based in Southern California. Members are
            the heartbeat of the SoCal Tanzanian Community. The agreement of the
            Southern California Tanzanian Community entered by and between the
            SoCal and its members effective as of February 07-2020. Whereas the
            members formed the SoCal as a nonprofit Mutual benefit corporation
            under the laws of California.
          </Grid>
        </Grid>
      </Container>
    </Typography>
  );
}