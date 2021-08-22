import * as React from 'react';
import Box from '@material-ui/core/Box';
import Link from '@material-ui/core/Link';
import AppBar from '../components/AppBar';
import Toolbar from '../components/Toolbar';
import './AppAppBar-styles.css';
import {Button} from "@material-ui/core";

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
            href="/"
            sx={{ fontSize: 24 }}
          >
            {'CanYouHelpWithMy.tech'}
          </Link>
          </Box>
          <Box sx={{ flex: 1, display: 'flex', justifyContent: 'space-between' }}>
            <Button
                style={{backgroundColor: "#77c6c6"}}
                className={'custom-link'}
              variant="contained"
              underline="none"
              href="/help"
              sx={rightLink}
            >
              Get Help
            </Button>
            <Button
                style={{backgroundColor: "#77c6c6"}}
                className={'custom-link'}
                variant="contained"
              underline="none"
              href="../workshops"
              sx={{ ...rightLink, color: 'secondary.main' }}
            >
              {'Workshops'}
            </Button>
            <Button
                style={{backgroundColor: "#77c6c6"}}
                className={'custom-link'}
                variant="contained"
              underline="none"
              href="../volunteer"
              sx={rightLink}
            >
              {'Volunteer'}
            </Button>
            <Button
                style={{backgroundColor: "#ff3366"}}
                className={'custom-link'}
                variant="contained"
              underline="none"
              href="../donate"
              sx={rightLink}
            >
              {'Donate'}
            </Button>
          </Box>
        </Toolbar>
      </AppBar>
      <Toolbar />
    </div>
  );
}

export default AppAppBar;
