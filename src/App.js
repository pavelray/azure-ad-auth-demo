import React from 'react';
import './App.css';
import Auth from './Auth';

class App extends React.Component {
  displayUserInformation() {
    const auth = new Auth();
    if (auth.isLoggedIn()) {
      console.log(auth.currentUser());
      return (
        <div>
          <p>
            Welcome, {auth.currentUser().name} from {auth.currentUser().city}, {auth.currentUser().country}
          </p>
          <a 
            className="App-link" 
            href="/abc" onClick={() => auth.logout()}
          >
            Sign Out
          </a> 
        </div>
      );
      
    }
  }

  render() {
    return (
      <div className="App">
        <header className="App-header">
          {this.displayUserInformation()}
        </header>
      </div>
    );
  }
}

export default App;
