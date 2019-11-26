import React from 'react';
import './App.css';
import play from './play.png'
import pause from './Pause.png'


export default (props)=> {
  return (
    <div className="image">
        <a href="#" onClick={() => props.clickHandler(props.toggle)}>
            <img src={props.toggle ? play : pause} alt="button" width='50vw'/>
        </a>
    </div>
  );
}

