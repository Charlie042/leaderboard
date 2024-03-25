import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { Interndetail } from './Interndetail';
//import { Interndetail } from './interndetail';

export const ProductMan = ({ Database, Section }) => {

  const data = sortData(Database)
  const [selectUser, setSelectUser] = useState('');
  const [details, setDetails] = useState(false)

  const handleClick = (name) => {
   const username = data.find(user => (user.name === name))
   setSelectUser(username)
   setDetails(true)
  };

  const closeUser = () => {
    setDetails(false)
  }

  return (
    <main>
      <div className="container">
        <h3>LeaderBoard</h3>
        {data.map((item, index) => {
          if (item.info.includes(Section)) {
            return (
              <div
              className='interns-details'
                key={index}
                onClick={() => handleClick(item.name)}
              >
                <div className='interns-info'>
                  <span>{item.id + 1}</span>
                  <img src={item.img} alt={item.name} />
                  <span>{item.name}</span>
                  <span>{item.info}</span>
                  <div className='grading'><p>{item.Grade}</p></div>
                </div>
                <p className="about">{item.about}</p>
              </div>
            );
          } else {
            return null;
          }
        })}
      </div>
      <Interndetail selectUser={selectUser} details={details} closeUser={closeUser}/>
    </main>
   
  );
  
};

function sortData(grade) {
 const userGrade = [...grade];

 userGrade.sort((a,b)=> parseFloat(b.Grade)- parseFloat(a.Grade))

 return userGrade
}

ProductMan.propTypes = {
  Database: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
      img: PropTypes.string.isRequired,
      name: PropTypes.string.isRequired,
      info: PropTypes.string.isRequired,
      Grade: PropTypes.string.isRequired,
      about: PropTypes.string.isRequired,
    })
  ).isRequired,
  Section: PropTypes.string.isRequired,
};

export default ProductMan;
