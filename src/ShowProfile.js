import React from 'react';



const ShowProfile = ( { user ,random } ) => {
    console.log("SHOW PROFILE Random",random);
    if (random === false) {
        return(
            <div>
            <h1>Lady Profile Editor</h1>

            <img src={`https://randomuser.me/api/portraits/women/${user.imageNum}.jpg`}/>
            <p>Name: { user.firstName } { user.lastName }</p>
            <p>Num: {user.imageNum}</p>
            </div>

        )
    }else{
        return(
            <div>
            <h1>Random Profile Editor</h1>

            <img src={user.profileImageURL}/>
            <p>Name: { user.firstName } { user.lastName }</p>
            <p>Num: {user.imageNum}</p>
            </div>

        )
    }
}

export default ShowProfile;
