import React from 'react';

//Icon
import ArrowDown from '../assets/DropdownMenu/ArrowDown.svg';

const Card = (props) => {
  const { cardTitle, isDropdown, icon } = props;

  return (
    <div className="card Card-size">
      <div className="Card-title">
        { icon && (
          <img src={icon} />
        )}
        <p className="font-weight-bold">{cardTitle}</p>
      </div>
      {isDropdown && (
        <img src={ArrowDown} />
      )}
    </div>
  );
};

export default Card;