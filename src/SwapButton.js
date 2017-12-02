import React from 'react';
import EditProfile from './EditProfile';
import ShowProfile from './ShowProfile';

const SwapButton = ( {onButtonClick, displayEdit, user, onChangeLast, onChangeFirst, onChangeImg, onChangeImgNum, randomOff,random} ) => {

function onClick() {
    onButtonClick();
    randomOff();
    console.log("onClick in Swap Button");
}

    if(displayEdit === false){
          return(
              <div>
                  <ShowProfile user = { user } random = {random}/>
                  <button onClick =  {()=> onClick()}> Show Edit </button>
              </div>
          )
    }else{
          return(
                <div>
                    <ShowProfile user = { user } random = {random}/>
                    <EditProfile
                      user = { user}
                      onChangeLast = {onChangeLast}
                      onChangeFirst = {onChangeFirst}
                      onChangeImg = {onChangeImg}
                      onChangeImgNum = {onChangeImgNum}
                    />
                    <button onClick = {()=> onClick()}> Hide Edit </button>
                </div>
  )
      }
    // return(
    //     // <div>{testing}</div>
    // )
}



export default SwapButton ;
