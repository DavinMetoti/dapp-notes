import React from "react";
import NoteCard from './NoteCard';

function ActiveNode({ onDelete, onActive, notes }) {
    return (
        <div className="container-list">
            <div className="list">
                {
                    notes.map(note => (
                        <NoteCard changeButton="Arsip" key={note.id} onDelete={onDelete} buttonData={onActive} {...note} />
                    ))
                }
            </div>
        </div>
    )
}

export default ActiveNode;