import React from "react";
const Note = ({ note }) => {
	return (
		<div className="note">
			<div className="button-container">
				<button id={note.id}>X</button>
			</div>
			<h3>{note.title} </h3>
			<p>{note.text} </p>
		</div>
	);
};

export default Note;
