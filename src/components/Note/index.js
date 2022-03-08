import React from "react";
import "./Note.css";
import deleteIcon from "../../assets/deleteIcon.png";
//import demo from "../../assets/demo.jpg"

const Note = (props) => {
  let timer = 500,
    timeout;
  const debounce = (func) => {
    clearTimeout(timeout);
    timeout = setTimeout(func, timer);
  };

  const updateText = (text, id) => {
    debounce(() => props.updateText(text, id));
  };
  return (
    <div className="note" style={{ backgroundColor: props.note.color }}>
      <textarea
        className="note_text custom-scroll_text"
        defaultValue={props.note.text}
        onChange={(e) => updateText(e.target.value, props.note.id)}
      />
      <div className="note_footer">
        <div style={{ flex: 1, flexDirection: "column" }}>
          <p className="time">{props.note.time}</p>
          <p style={{ fontWeight: "bold" }}>{props.note.date}</p>
        </div>
        <img
          src={deleteIcon}
          alt="DELETE"
          onClick={() => props.deleteNote(props.note.id)}
        />
      </div>
    </div>
  );
};

export default Note;
