import withRoot from '../../onepirate/modules/withRoot';
// --- Post bootstrap -----
import AppFooter from '../../onepirate/modules/views/AppFooter';
import ProductHero from '../../onepirate/modules/views/ProductHero';
import ProductValues from '../../onepirate/modules/views/ProductValues';
import AppAppBar from '../../onepirate/modules/views/AppAppBar';

import Avatar from '@material-ui/core/Avatar';
import Button from '@material-ui/core/Button';
import CssBaseline from '@material-ui/core/CssBaseline';
import TextField from '@material-ui/core/TextField';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Checkbox from '@material-ui/core/Checkbox';
import Link from '@material-ui/core/Link';
import Grid from '@material-ui/core/Grid';
import Box from '@material-ui/core/Box';
import LockOutlinedIcon from '@material-ui/icons/LockOutlined';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';
import Container from '@material-ui/core/Container';

import { GoogleLogin, GoogleLogout , useGoogleLogin} from 'react-google-login'
import React, { useState } from "react";

const clientId = '1043334376061-cs43ctrjk9rghpa3akq98ko30hu011ad.apps.googleusercontent.com'
//This is our Google Client ID

var googleuser = {};
var isSignedIn = false;


const AuthPage = (props) => {
    return (
        <React.Fragment>
            <AppAppBar/>

            <div>

                <b>
                    You are logged in. Welcome {props.firstName} {props.lastName} {props.img} the volunteer dashboard!
                </b>
            </div>

            <div>
                <GoogleLogout clientId={clientId} buttonText="Logout" onLogoutSuccess={props.logout}/>
            </div>


        </React.Fragment>
    )
}

/*const MountTest = () => {
  const [showButton, toggleShow] = useState(true)

  if (showButton) {
    return (
      <GoogleLogin
        onSuccess={res => {
          toggleShow(false)
          success(res)
        }}
        onFailure={error}
        clientId={clientId}
      >
        Auth then Hide button
      </GoogleLogin>
    )
  }
  return <button onClick={() => toggleShow(true)}>show button</button>
}*/

const useStyles = makeStyles((theme) => ({
    root:{
        height:'80vh',
        backgroundColor: theme.palette.secondary.light
    },
  paper: {
    marginTop: theme.spacing(8),
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
  },
  avatar: {
    margin: theme.spacing(1),
    backgroundColor: theme.palette.secondary.main,
  },
  form: {
    width: '100%', // Fix IE 11 issue.
    marginTop: theme.spacing(1),
  },
  submit: {
    margin: theme.spacing(3, 0, 2),
  },
}));


function Volunteer() {
    const [state, setState] = useState({
        authenticated: false,
        email: '',
        firstName: '',
        lastName:'',
        img: '',
    });
    const classes = useStyles();

    const success =  (response) => {
        //if (token) logIn({ token, userId, displayName });
            setState({authenticated: true, email: response.profileObj.email, firstName: response.profileObj.givenName, lastName: response.profileObj.familyName, img: response.profileObj.imageUrl});

            console.log(response.profileObj.email) // eslint-disable-line
        console.log(response.profileObj.givenName) // eslint-disable-line
        console.log(response.profileObj.familyName) // eslint-disable-line
        //console.log(response.profileObj.imageURL) // eslint-disable-line
        //console.log(esponse.isSignedIn) // eslint-disable-line

        googleuser = response;
        isSignedIn = true;

    }

    const error = response => {
        console.error(response) // eslint-disable-line
        isSignedIn = false;
    }

    const loading = () => {
        console.log('loading') // eslint-disable-line
    }

    const logout = () => {
        console.log('logout') // eslint-disable-line
    }


   return (
           <div>
               {
                   state.authenticated ?

                       <AuthPage logout={logout} firstName={state.firstName} lastName={state.lastName} email={state.lastName} img={state.img}/>
                       :
                       <React.Fragment>
                           <AppAppBar/>

                           <Container component="main" maxWidth="xs">
                               <CssBaseline/>
                               <div className={classes.paper}>
                                   <Avatar className={classes.avatar}>
                                       <LockOutlinedIcon/>
                                   </Avatar>
                                   <Typography component="h1" variant="h5">
                                       Sign in
                                   </Typography>
                                   <form className={classes.form} noValidate>
                                       <TextField
                                           variant="outlined"
                                           margin="normal"
                                           required
                                           fullWidth
                                           id="email"
                                           label="Email Address"
                                           name="email"
                                           autoComplete="email"
                                           autoFocus
                                       />
                                       <TextField
                                           variant="outlined"
                                           margin="normal"
                                           required
                                           fullWidth
                                           name="password"
                                           label="Password"
                                           type="password"
                                           id="password"
                                           autoComplete="current-password"
                                       />
                                       <FormControlLabel
                                           control={<Checkbox value="remember" color="primary"/>}
                                           label="Remember me"
                                       />

                                       <Grid container>
                                           <Grid item xs={12}>
                                               <Button
                                                   type="submit"
                                                   fullWidth
                                                   variant="contained"
                                                   color="primary"
                                                   className={classes.submit}
                                               >
                                                   Sign In
                                               </Button>
                                           </Grid>
                                           <Grid item xs={12}>
                                               <GoogleLogin
                                                   clientId={clientId}
                                                   scope={'https://www.googleapis.com/auth/userinfo.email', 'https://www.googleapis.com/auth/userinfo.profile', 'openid'}
                                                   onSuccess={success}
                                                   onFailure={error}
                                                   onRequest={loading}
                                                   offline={false}
                                                   approvalPrompt="force"
                                                   responseType="id_token"
                                                   isSignedIn={true}
                                                   theme="dark"
                                                   prompt="consent"
                                                   className='button'
                                                   style={{color: 'red'}}
                                                   cookiePolicy={'single_host_origin'}
                                               >
                                               </GoogleLogin>
                                           </Grid>
                                       </Grid>


                                       <Grid container>
                                           <Grid item xs>
                                               <Link href="#" variant="body2">
                                                   Forgot password?
                                               </Link>
                                           </Grid>
                                           <Grid item xs>
                                               <Link href="/volunteersignup" variant="body2">
                                                   {"Sign Up"}
                                               </Link>
                                           </Grid>
                                       </Grid>
                                   </form>
                               </div>
                           </Container>

                           <AppFooter/>
                       </React.Fragment>
               }
           </div>

);
}



  export default withRoot(Volunteer);
