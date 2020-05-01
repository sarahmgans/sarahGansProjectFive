import React from "react";
import firebase from "./firebase";

function Log(props) {

  const deleteItem = () => {
    const itemRef = firebase.database().ref(props.logId);
    itemRef.remove();
  };

  const handleKeyPress = (event) => {
    if (event.key === "Enter") {
      const itemRef = firebase.database().ref(props.logId);
      itemRef.remove();
    }
  };

  return (
    <li tabIndex="0">
      <p>
        <span className="bold">Title:</span> {props.logTitle}
      </p>
      <p>
        <span className="bold">Composer:</span> {props.logComp}
      </p>
      <p>
        <span className="bold">Tempo:</span> {props.cpm} Chirps per Minute
      </p>
      <p className="last">
        <span className="bold">Meter:</span> {props.logMeter}/4
      </p>
      <a href="#top"
        className="replay"
        onClick={() => props.setTempoMeter(props.logId)}
        tabIndex="0"
      >
        Play me again!
      </a>
      <span
        className="x"
        onClick={deleteItem}
        onKeyDown={handleKeyPress}
        tabIndex="0"
      >
        ☒
      </span>
    </li>
  );
}


export default Log;