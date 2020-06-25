import React, {useState} from 'react';

//Icons
import ArrowDown from '../assets/DropdownMenu/ArrowDown.svg';
import Checked from '../assets/DropdownMenu/Checked.svg';
import NotChecked from '../assets/DropdownMenu/NotChecked.svg';

const DropDown = ({ title }) => {
  const [open, setOpen] = useState(false);
  const toggle = () => setOpen(!open);

  const handler = item => {

  }

  return (
    <div className="Wrapper">
      <div 
        tabIndex={0} 
        className="Dropdown-header" 
        role="button" 
        onKeyPress={() => toggle(!open)}
        onClick={() => toggle(!open)}
      >
        <p className="Dropdown-header-title-bold">{title}</p>
        <div className="Dropdown-header-action">
          <img src={ArrowDown} />
        </div>
      </div>
      {open && (
        <ul className="Dropdown-list">
          <li>
            <button className="list-button">
              <img src={Checked} />
              Garis
            </button>
          </li>
          <li>
            <button className="list-button">
              <img src={NotChecked} />
              Form & Space
              </button>
          </li>
        </ul>
      )}
    </div>
  )
}

export default DropDown;