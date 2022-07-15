import React from "react";
import Note from "./Note";

const ContainerNotes = ({ notes }) => {
	return (
		<div className="container-notes">
			{notes.map((note) => {
				return <Note key={note.id} note={note} />;
			})}
		</div>
	);
};

export default ContainerNotes;
