## Steps of React

1. Render out hard-coded data
2. Model your data (similar to the process in Rails)
3. Add state to your app
4. Make render use app’s state (remove hard-coding from render)
5. Handle events from interactive elements (`onClick`, `onChange`)
6. Connect those to methods that update the app’s state (`this.setState`)


## Models

### User
- first name
- last name
- profile image


## Challenges

1. Add editable last name field
2. Add editable image URL field
3. Make two `ShowProfile` and `EditProfile` components that renders the showing of the user’s info, and renders the fields for editing their info
4. Add toggle button to switch between either profile viewing and editing
5. (Advanced) Add a 'Random' button that uses `fetch` or `axios` to load random user information from `https://randomuser.me/api/`
6. (Advanced) Add [prettier](https://github.com/prettier/prettier) to automatically format code:
    1. Add a `yarn format` script to [run prettier](https://prettier.io/docs/en/cli.html) on all code in the `./src` directory
    2. Add a prettier [pre-commit hook](https://prettier.io/docs/en/precommit.html)


### Create React App info

This project was bootstrapped with [Create React App](https://github.com/facebookincubator/create-react-app).

Below you will find some information on how to perform common tasks.<br>
You can find the most recent version of this guide [here](https://github.com/facebookincubator/create-react-app/blob/master/packages/react-scripts/template/README.md).
