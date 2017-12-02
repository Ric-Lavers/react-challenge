import React from 'react';
import EditProfile from './EditProfile';
import ShowProfile from './ShowProfile';

const SwapButton = ( {onButtonClick, displayEdit, user, onChangeLast, onChangeFirst, onChangeImg, onChangeImgNum} ) => {

    if(displayEdit === false){
          return(
              <div>
                  <ShowProfile user = { user }/>
                  <button onClick = {onButtonClick}> Show Edit </button>
              </div>
          )
    }else{
          return(
                <div>
                    <ShowProfile user = { user }/>
                    <EditProfile
                      user = { user}
                      onChangeLast = {onChangeLast}
                      onChangeFirst = {onChangeFirst}
                      onChangeImg = {onChangeImg}
                      onChangeImgNum = {onChangeImgNum}
                    />
                    <button onClick = {onButtonClick}> Hide Edit </button>
                </div>
  )
      }
    // return(
    //     // <div>{testing}</div>
    // )
}



export default SwapButton ;
