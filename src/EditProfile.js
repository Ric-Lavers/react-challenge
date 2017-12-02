import React from 'react';


const EditProfile = ( { user, onChangeLast, onChangeFirst, onChangeImg,onChangeImgNum } ) => {

    return(
        <div>
            <label>
              First name:
              {' '}
              <input id="first"
                value={ user.firstName }
                onChange={ onChangeFirst}
              />
            </label>

            <label>
              Last name:
              {' '}
              <input id="last"
                value={ user.lastName }
                onChange={ onChangeLast }
              />
            </label>

            <br/>


            <label>
              Image Num:
              {' '}
              <input
                  type="number"
                  min="0"
                  max="99"
                  step="1"
                  value={ user.imageNum }
                  onChange={ onChangeImgNum } />
            </label>

        </div>
    )
}

export default EditProfile;
