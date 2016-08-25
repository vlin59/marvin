import React from 'react';
import { LoginForm, SocialLoginLink, SocialLoginButton } from 'react-stormpath';
import { Link } from 'react-router';

export default class LoginPage extends React.Component {
  constructor(props){
    super(props);
  }

  render(){
    return(
      <div className="login-form m-x-auto text-xs-center">
      <div>
        <h1>MARVIN</h1>
         <LoginForm>
          <div className='sp-login-form'>
            <div className="row">
              <div className="form-group">
                <div>
                  <input className="form-control" id="spUsername" name="username" placeholder="Username or Email" />
                </div>
              </div>
            </div>

            <div className="row">
              <div className="form-group">
                <div>
                  <input type="password" className="form-control" id="spPassword" name="password" placeholder="Password" />
                </div>
              </div>
            </div>

            <div className="row">
              <div className="form-group">
                  <p className="alert alert-danger" spIf="form.error"><span spBind="form.errorMessage" /></p>
                  <button type="submit" className="btn btn-primary full">Login</button>
              </div>
            </div>

            <div className="row">
              <Link to="/forgot" className="pull-right">Forgot Password</Link>
            </div>


            <div className="row">
              <SocialLoginButton providerId='google'>Sign in with Google</SocialLoginButton>
              <SocialLoginButton providerId='facebook'>Sign in with Facebook</SocialLoginButton>
            </div>

          </div>
        </LoginForm>
      </div>
      </div>
      )
  }

}