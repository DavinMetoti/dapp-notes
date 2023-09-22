import React from 'react';
import { showFormattedDate } from '../assets/utils/data';

function NoteCard({ changeButton, id, title, body, createdAt, onDelete, buttonData }) {
    return (
        <div className="card container-content">
            <div>
                <div className="content">
                    <h2 className="content-title">{title}</h2>
                    <span className="content-date">{showFormattedDate(createdAt)}</span>
                </div>
                <p className="text-content">
                    {body}
                </p>
            </div>
            <div className="content-button">
                <button onClick={() => onDelete(id)} className="button-delete">
                    Delete
                </button>
                <button onClick={() => buttonData(id)} className="button-arsip">
                    {changeButton}
                </button>
            </div>
        </div>
    )
}

export default NoteCard;