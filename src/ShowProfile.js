import React from 'react';



const ShowProfile = ( { user  } ) => (
    <div>
        <h1>Profile Editor</h1>

        <img src={`https://randomuser.me/api/portraits/women/${user.imageNum}.jpg`}/>
        <p>Name: { user.firstName } { user.lastName }</p>
        <p>Num: {user.imageNum}</p>
    </div>

)

export default ShowProfile;
