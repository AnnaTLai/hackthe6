import withRoot from '../../onepirate/modules/withRoot';

import styles from './profile.css';
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
import Container from '@material-ui/core/Container';
import { createTheme, withStyles, makeStyles, ThemeProvider } from '@material-ui/core/styles';

import { GoogleLogin, GoogleLogout , useGoogleLogin} from 'react-google-login'
import React, { useState } from "react";
import AssignmentIndRoundedIcon from '@material-ui/icons/AssignmentIndRounded';
import { green} from '@material-ui/core/colors';


const clientId = '1043334376061-cs43ctrjk9rghpa3akq98ko30hu011ad.apps.googleusercontent.com'
//This is our Google Client ID
const videoSite = 'https://video-app-3458-8512-dev.twil.io/?passcode=03837734588512';


var googleuser = {};
var isSignedIn = false;

const theme = createTheme({
  palette: {
    primary: green,
  },
});


const AuthPage = (props) => {
    const classes = useStyles();

    return (
        <React.Fragment>

            <div className={classes.root}>
                <div id={"info"}>
                    {/*<AssignmentIndRoundedIcon style={{ fontSize: 120 }} color="secondary"/>*/}
                    <Avatar alt={props.firstName + ' ' + props.lastName} src={props.img}  variant={'circular'} className={classes.sizeAvatar}/>
                    <h2>
                        <h2>{props.firstName} {props.lastName}</h2>
                    </h2>
                    <h3>Toronto based</h3>
                </div>
                <div id={"state"}>
                    <ul>
                        <li>
                            <a href="#" target="_blank">
                                <i>3</i>
                                <span>People helped</span>
                            </a>
                        </li>
                        <li>
                            <a href="#" target="_blank">
                                <i>2</i>
                                <span>Friends</span>
                            </a>
                        </li>
                        <li>
                            <a href="#" target="_blank">
                                <i>1</i>
                                <span>Following</span>
                            </a>
                        </li>
                    </ul>
                </div>
                <div id={"info"}>

                    <b>
                        You are logged in. Welcome, {props.firstName}, to the volunteer dashboard!
                    </b>
                    <br />
                    <br />

                    <Button variant="contained" color='primary' href={videoSite}>
                        Start helping Now
                    </Button>

                    <br />
                    <br />


                    <div>
                        <GoogleLogout clientId={clientId} buttonText="Logout" onLogoutSuccess={props.logout}/>
                    </div>
                </div>


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
        height:'100vh',
        backgroundColor: theme.palette.secondary.light
    },margin: {
      margin: theme.spacing(1),
    },

  paper: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
  },
  avatar: {
    margin: theme.spacing(3),
    backgroundColor: theme.palette.secondary.main,
  },
    sizeAvatar: {
        height: theme.spacing(15),
        width: theme.spacing(15),
        marginBottom: theme.spacing(1),
        alignContent: 'center',
        textAlign: 'center',
        marginTop: theme.spacing(1),
        display: 'flex',
        marginLeft: 'auto',
        marginRight: 'auto',
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
        setState({
            authenticated: false,
            email: '',
            firstName: '',
            lastName:'',
            img: '',
        })
    }


   return (
       <div>
           <AppAppBar/>
               {
                   state.authenticated ?

                       <AuthPage logout={logout} firstName={state.firstName} lastName={state.lastName} email={state.lastName} img={state.img}/>
                       :
                       <div className={classes.root}>

                           <Container component="main" maxWidth="xs" >
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


                                       <Grid container className={classes.submit}>
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

                       </div>
               }

           <AppFooter/>
       </div>

);
}



  export default withRoot(Volunteer);
