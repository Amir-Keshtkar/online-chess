import React from 'react';


export default function Block(props) {

  return (
    <button className={"Block " + props.shade}
      onClick={props.onClick}
      style={props.style}
      key={props.keyVal}
    >
    </button>
  );

}
