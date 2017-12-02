import React, { Component } from 'react';
import './App.css';
import ShowProfile from './ShowProfile'
import EditProfile from './EditProfile'
import SwapButton from './SwapButton';
import RandomUserButton from './RandomUser';

class App extends Component {
  // Model
    constructor(props){
        super(props);
        this.state = {
            user: {
              firstName: 'Alice',
              lastName: 'Jones',
              profileImageURL: 'https://randomuser.me/api/portraits/women/50.jpg',
              imageNum: 50,
          },
            displayEdit: false,
            random: false
        };
        this.fetch = this.fetch.bind(this);
        console.log("state", this.state);
    }

  // Controller actions

  onChangeimage = (event) => {
    const input = event.target
    const newProfileImageURL = input.value
    this.setState((prevState) => {
      const user = prevState.user
      const newUser = { ...user, profileImageURL: newProfileImageURL}
      return {
        user: newUser
      }
    })
  }

  onChangeImgNum = (event) => {
    const input = event.target
    const newNum = input.value
    this.setState((prevState) => {
      const user = prevState.user
      const newUser = { ...user, imageNum: newNum}
      return {
        user: newUser
      }
    })
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

    onChangeLastName = (event) => {
    // Get the <input> (an HTMLInputElement)
    const input = event.target
    // Get the current inputted text from the field
    const newLastName = input.value
    // Make changes to the state
    this.setState((prevState) => {
      const user = prevState.user
      // Create copy of user with new first name
      const newUser = { ...user, lastName: newLastName }
      return {
        // this.state.user will be updated
        user: newUser
      }
    })
}

    onButtonClick = (event) => {
      this.displayEdit = !this.displayEdit
      this.setState((prevState) => {
        return {
          displayEdit: this.displayEdit
        }
      })
    }

    randomOff = () => {
        this.setState( ()=>{
            return {random: false}
        });
        console.log(this.setState.random);
    }


    fetch = () => {
        this.setState( ()=>{return {random: true}});
        console.log(this.state.random);
        const randomUser = fetch('https://randomuser.me/api/')
            .then( (response) => {
                if (response.status >= 400) {
                 throw `Response Invalid ( ${response.status} )`;
                 return;
               }
            return response.json();
        })
        .then( (myJSON) =>{
            let newUserRaw = myJSON.results[0]

            var newUserData = {}
            newUserData.profileImageURL = newUserRaw.picture.large;
            newUserData.firstName = newUserRaw.name.first;
            newUserData.lastName = newUserRaw.name.last;
            function num(a){return a.match(/\d+/g)}
            newUserData.imageNum = num(newUserData.profileImageURL)

            // console.log("INSIDE", newUserData);
            this.setState((prevState) => {
              return {user: newUserData}
          });


            return newUserData

        }).catch( (error)=> {console.log("there has been a fetch error");} );
    }

    ComponenDidMount() {
      this.fetch()
        .then(data => {
            console.log("CATTT", data);
          this.setState({
            user: data
          });
        });
    }

  // View

  render() {
    const user = this.state.user
    const random =  this.state.random
    const displayEditor = this.state.displayEdit
    console.log("Random", this.state.random);
    // console.log(random);

    return (
      <div className="App">

        <SwapButton
            onButtonClick = {(event) => this.onButtonClick(event)}
            user = { user}
            onChangeLast = {(event) => this.onChangeLastName(event) }
            onChangeFirst = {(event) => this.onChangeFirstName(event) }
            onChangeImg = {(event) => this.onChangeimage(event) }
            displayEdit = {displayEditor}
            onChangeImgNum = {(event) => this.onChangeImgNum(event)}
            randomOff = {() => this.randomOff()}
            random = {random}
        />

        <RandomUserButton onButtonClick = {() => this.fetch() }/>



      </div>
    );
  }
}

export default App;
