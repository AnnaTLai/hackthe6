import * as React from 'react';
import Box from '@material-ui/core/Box';
import Link from '@material-ui/core/Link';
import AppBar from '../components/AppBar';
import Toolbar from '../components/Toolbar';

const rightLink = {
  fontSize: 16,
  color: 'common.white',
  ml: 3,
};

function AppAppBar() {
  return (
    <div>
      <AppBar position="fixed">
        <Toolbar sx={{ justifyContent: 'space-between' }}>
          <Box sx={{ flex: 1, display: 'flex', justifyContent: 'flex-start' }}>
          <Link
            variant="h6"
            underline="none"
            color="inherit"
            href="#"
            sx={{ fontSize: 24 }}
          >
            {'CanYouHelpMeWithMy.tech'}
          </Link>
          </Box>
          <Box sx={{ flex: 1, display: 'flex', justifyContent: 'space-between' }}>
            <Link
              color="inherit"
              variant="h6"
              underline="none"
              href="/"
              sx={rightLink}
            >
              {'Get Help'}
            </Link>
            <Link
              color="inherit"
              variant="h6"
              underline="none"
              href="../workshops"
              sx={{ ...rightLink, color: 'secondary.main' }}
            >
              {'Workshops'}
            </Link>
            <Link
              color="inherit"
              variant="h6"
              underline="none"
              href="../volunteer"
              sx={rightLink}
            >
              {'Volunteer'}
            </Link>
            <Link
              color="inherit"
              variant="h6"
              underline="none"
              href="../donate"
              sx={rightLink}
            >
              {'Donate'}
            </Link>
          </Box>
        </Toolbar>
      </AppBar>
      <Toolbar />
    </div>
  );
}

export default AppAppBar;
