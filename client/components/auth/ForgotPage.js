import React from 'react';
import { ResetPasswordForm } from 'react-stormpath';

export default class ForgotPage extends React.Component {
  constructor(props){
    super(props);
  }

  render(){
    return(
      <div className="container-fluid">
        <ResetPasswordForm />
      </div>
      )
  }

}