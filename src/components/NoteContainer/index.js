import React from "react";
import Note from "../Note";
import "./NoteContainer.css";

const NoteContainer = (props) => {
  const reverseArray = (arr) => {
    const newArr = [];
    for (let i = arr.length - 1; i >= 0; --i) {
      newArr.push(arr[i]);
    }
    return newArr;
  };
  const notes = reverseArray(props.notes);
  return (
    <div className="note-container">
      <h1>Notes</h1>
      <div className="note-container_notes custom-scroll">
        {notes.length > 0 ? (
          notes.map((item) => {
            return (
              <Note
                key={item.id}
                note={item}
                deleteNote={props.deleteNote}
                updateText={props.updateText}
              />
            );
          })
        ) : (
          <h3>No Notes Present</h3>
        )}
      </div>
    </div>
  );
};

export default NoteContainer;
