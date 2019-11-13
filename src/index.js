import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';
import b2cauth from 'react-azure-adb2c';

b2cauth.initialize({
    instance: 'https://login.microsoftonline.com/tfp/', 
    tenant: 'schooltoolb2c.onmicrosoft.com',
    signInPolicy: 'B2C_1_schooltool_signup',
    applicationId: '29907098-0e87-4652-9484-8d90c92c8742',
    cacheLocation: 'sessionStorage',
    scopes: ['https://schooltoolb2c.onmicrosoft.com/schooltool/user_impersonation'],
    redirectUri: 'http://localhost:3000',
    postLogoutRedirectUri: window.location.origin,
  });

b2cauth.run(() => {
    ReactDOM.render(<App />, document.getElementById('root'));
    serviceWorker.unregister();
});

