import React, { useContext } from 'react';
import * as Components from './Components';
import { GoogleLogin } from '@react-oauth/google';
import { jwtDecode } from "jwt-decode";
import { ShopContext } from '../Context/ShopContext';

const LoginSignup = () => {
  const [signIn, toggle] = React.useState(true);
  const { login } = useContext(ShopContext);

  const handleGoogleLogin = (credentialResponse) => {
    const decoded = jwtDecode(credentialResponse.credential);
    login(decoded);
  };

  return(
    <Components.div>
        <Components.Container>
          <Components.SignUpContainer signinIn={signIn}>
              <Components.Form>
                  <Components.Title>Create Account</Components.Title>
                  <Components.Input type='text' placeholder='Name' />
                  <Components.Input type='email' placeholder='Email' />
                  <Components.Input type='password' placeholder='Password' />
                  <Components.Button>Sign Up</Components.Button>
              </Components.Form>
          </Components.SignUpContainer>

          <Components.SignInContainer signinIn={signIn}>
               <Components.Form>
                   <Components.Title>Sign in</Components.Title>
                   <Components.Input type='email' placeholder='Email' />
                   <Components.Input type='password' placeholder='Password' />
                   <Components.Anchor href='#'>Forgot your password?</Components.Anchor>
                   <Components.Button>Sigin In</Components.Button>
                   <GoogleLogin
                    onSuccess={handleGoogleLogin}
                    onError={() => {
                      console.log('Login Failed');
                    }}
                  />
               </Components.Form>
          </Components.SignInContainer>

          <Components.OverlayContainer signinIn={signIn}>
              <Components.Overlay signinIn={signIn}>

              <Components.LeftOverlayPanel signinIn={signIn}>
                  <Components.Title>Welcome Back!</Components.Title>
                  <Components.Paragraph>
                      To keep connected with us please login with your personal info
                  </P>
