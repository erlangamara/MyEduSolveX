import React from 'react';

import ArrowDown from '../assets/DropdownMenu/ArrowDown.svg';

const Card = (props) => {
  const {cardTitle} = props;

  return (
    <div class="card Card-size">
      <p className="font-weight-bold">{cardTitle}</p>
      <img src={ArrowDown} />
    </div>
  );
};

export default Card;