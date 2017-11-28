import React from 'react';
import PropTypes from 'prop-types';

const NavButton = ({ name, img, onClick, square }) =>  {
  return (
    <div className='navwrap'>
      <button onClick={onClick} className='navbutton flex flex-row justify-around items-center'>
        <img src={img} style={{maxHeight:'30px'}} /> {!!square && <span>{name}</span>}
      </button>
    <style jsx>{`
      span {
        padding-left:5px;
      }
      .navwrap {
        display:inline-block;
        padding:5px;
      }
      .navbutton {
        font-family:'Open Sans',sans-serif;
        font-size:16px;
        font-weight:600;
        background-color:white;
        border:transparent;
        border-bottom:solid 2px transparent;
        outline:none;
        padding:5px;
      }
      .navbutton:focus {
        border-bottom: solid 2px #00adee;
      }
      .navbutton:hover {
        border-bottom: solid 2px #00adee;
        opacity:0.7;
        transition:all .2s ease-in;
      }
    `}</style>
    </div>
  );
}
NavButton.propTypes = {
  name: PropTypes.string.isRequired
};

export default NavButton;
