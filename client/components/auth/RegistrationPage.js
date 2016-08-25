import React from 'react';
import { RegistrationForm, SocialLoginButton } from 'react-stormpath';

export default class RegistrationPage extends React.Component {
  constructor(props){
    super(props);
  }

  render(){
    return(
      <div className="login-form m-x-auto text-xs-center">
      <div>
        <h1>MARVIN</h1>
         <RegistrationForm>
          <div className='sp-login-form'>
            <div className="row">
              <div className="form-group">
                <div>
                  <input className="form-control" id="spgivenName" name="givenName" placeholder="First Name" />
                </div>
              </div>
            </div>

            <div className="row">
              <div className="form-group">
                <div>
                  <input className="form-control" id="spsurname" name="surname" placeholder="Last Name" />
                </div>
              </div>
            </div>

            <div className="row">
              <div className="form-group">
                <div>
                  <input className="form-control" id="spEmail" name="email" placeholder="Username or Email" />
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
                  <button type="submit" className="btn btn-primary full">Register</button>
              </div>
            </div>

             <div className="row">
              <SocialLoginButton providerId='google'>Register with Google</SocialLoginButton>
              <SocialLoginButton providerId='facebook'>Register with Facebook</SocialLoginButton>
            </div>

          </div>
        </RegistrationForm>
      </div>
      </div>
      )
  }

}