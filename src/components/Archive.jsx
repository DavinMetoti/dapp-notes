import React from "react";
import NoteCard from './NoteCard';

function Archive({ onDelete, notes, onArchive }) {
    return (
        <div className="container-list">
            <div className="list">
                {
                    notes.map(note => (
                        <NoteCard changeButton="Pindah" key={note.id} onDelete={onDelete} buttonData={onArchive} {...note} />
                    ))
                }
            </div>
        </div>
    )
}

export default Archive;