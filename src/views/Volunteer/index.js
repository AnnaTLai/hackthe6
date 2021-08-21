import withRoot from '../../onepirate/modules/withRoot';
// --- Post bootstrap -----
import AppFooter from '../../onepirate/modules/views/AppFooter';
import ProductHero from '../../onepirate/modules/views/ProductHero';
import ProductValues from '../../onepirate/modules/views/ProductValues';
import AppAppBar from '../../onepirate/modules/views/AppAppBar';
import MainNav from "../../components/navbar";

import Form from "./Form.js"

import GoogleLogin, { GoogleLogout } from 'react-google-login'
import React, { useState } from "react";

const clientId = '1043334376061-cs43ctrjk9rghpa3akq98ko30hu011ad.apps.googleusercontent.com'
//This is our Google Client ID

const success = response => {
  console.log(response) // eslint-disable-line
}

const error = response => {
  console.error(response) // eslint-disable-line
}

const loading = () => {
  console.log('loading') // eslint-disable-line
}

const logout = () => {
  console.log('logout') // eslint-disable-line
}

const MountTest = () => {
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
}

function Volunteer() {
    return (
      <React.Fragment>
        <AppAppBar />
        <Form />


        <div>
            <h1> Sign up to be a volunteer! Or you can Sign in here. </h1>
            <div>
              <GoogleLogin
                clientId={clientId}
                onSuccess={success}
                onFailure={error}
                onRequest={loading}
                offline={false}
                approvalPrompt="force"
                responseType="id_token"
                isSignedIn
                theme="dark"
                prompt="consent"
                className='button'
                style={{ color: 'red'}}
                >
                <span>Google Login</span>
              </GoogleLogin>

              <br />
              <br />
              <GoogleLogout buttonText="Logout" onLogoutSuccess={logout} />
            </div>

        </div>
        <AppFooter />
      </React.Fragment>
    );
  }

  export default withRoot(Volunteer);
