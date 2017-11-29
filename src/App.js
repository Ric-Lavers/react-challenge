import React, { Component } from 'react';
import './App.css';

class App extends Component {
  state = {
    user: {
      firstName: 'Alice',
      lastName: 'Jones',
      profileImageURL: 'https://randomuser.me/api/portraits/women/50.jpg'
    }
  }

  // When user types in text field
  // This function is called
  // The event provides information about what happened
  onChangeFirstName = (event) => {
    // Get the <input> (an HTMLInputElement)
    const input = event.target
    // Get the current inputted text from the field
    const newFirstName = input.value
    // Make changes to the state
    this.setState((prevState) => {
      const user = prevState.user
      // Create copy of user with new first name
      const newUser = { ...user, firstName: newFirstName }
      return {
        // this.state.user will be updated
        user: newUser
      }
    })
  }

  render() {
    const user = this.state.user

    return (
      <div className="App">
        <h1>LinkedIn Profile Editor</h1>
        <img src={ user.profileImageURL } />
        <p>Name: { user.firstName } { user.lastName }</p>

        <label>
          First name:
          {' '}
          <input
            value={ user.firstName }
            onChange={ this.onChangeFirstName }
          />
        </label>
      </div>
    );
  }
}

export default App;
