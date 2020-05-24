import React from 'react';
import './MenuButton.css';

export default function MenuButton(props) {

  return (
    <div className="menu">
      {props.open ?
        (<svg width="28" height="28" viewBox="0 0 28 28" fill="none" xmlns="http://www.w3.org/2000/svg">
            <circle cx="14" cy="14" r="14" fill="#333333"/>
            <rect x="7" y="16" width="14" height="2" rx="1" fill="white"/>
            <rect x="7" y="10" width="14" height="2" rx="1" fill="white"/>
          </svg>) :
        (<svg width="28" height="28" viewBox="0 0 28 28" fill="none" xmlns="http://www.w3.org/2000/svg">
          <circle cx="14" cy="14" r="14" fill="#333333"/>
          <rect width="14.85" height="2.12" rx="1.06065" transform="matrix(0.71 -0.71 0.71 0.71 8 18.5)" fill="white"/>
          <rect width="14.85" height="2.12" rx="1.06065" transform="matrix(0.71 0.71 -0.71 0.71 9.5 8)" fill="white"/>
        </svg>)
      }
      Favourite
    </div>
  )
}
