import React from 'react'

export const Interndetail = ({selectUser, details, closeUser}) => {

        return (
          <div>
            {selectUser && details && (
              <div className='modal-overlay'>
                <div className='modal-content'>
                  <div className='modal-header'>
                    <img src={selectUser.img} alt={selectUser.name} />
                    <h3>{selectUser.name}</h3>
                  </div>
                  <p>{selectUser.about}</p>
                  <button onClick={closeUser}>X</button>
                </div>
              </div>
            )}
          </div>
        );
      };