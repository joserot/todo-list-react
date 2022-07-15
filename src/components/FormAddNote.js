import React, { useState, useEffect } from "react";
import ContainerNotes from "./ContainerNotes";
import { v4 as uuidv4 } from "uuid";

const FormAddNote = () => {
	const notesSaved =
		localStorage.getItem("notes") !== null
			? JSON.parse(localStorage.getItem("notes"))
			: [];

	const [notes, setNotes] = useState(notesSaved);

	useEffect(() => {
		localStorage.setItem("notes", JSON.stringify(notes));
	}, [notes]);

	const addNote = (e) => {
		e.preventDefault();
		const title = e.target.title.value;
		const text = e.target.note.value;

		if (title.length === 0 && text.length === 0) return false;
		const note = {
			title,
			text,
			id: uuidv4(),
		};

		setNotes((current) => [...current, note]);
		e.target.reset();
	};

	const deleteNote = (e) => {
		if (e.target.id) {
			let newNotes = notes.filter((n) => {
				return n.id !== e.target.id;
			});

			setNotes((current) => [...newNotes]);
		}
	};

	return (
		<div onClick={deleteNote}>
			<form onSubmit={addNote}>
				<input
					name="title"
					type="text"
					placeholder="Titulo"
					className="input-add-title"
				/>
				<textarea
					name="note"
					rows="1"
					type="text"
					placeholder="Agrega una nota"
					className="input-add-note"
				/>
				<input type="submit" value="Agregar" />
			</form>
			<ContainerNotes notes={notes} />
		</div>
	);
};

export default FormAddNote;
