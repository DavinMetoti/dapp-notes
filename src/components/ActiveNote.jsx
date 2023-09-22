function ActiveNode({ onDelete, onActive, notes }) {
    return (
        <div className="container-list">
            <div className="list">
                {notes.map((note) => (
                    <NoteCard
                        changeButton="Arsip"
                        key={note.id}
                        onDelete={onDelete}
                        buttonData={onActive}
                        {...note}
                    />
                ))}
            </div>
        </div>
    );
}

ActiveNode.propTypes = {
    onDelete: PropTypes.func.isRequired,
    onActive: PropTypes.func.isRequired,
    notes: PropTypes.arrayOf(
        PropTypes.shape({
            id: PropTypes.number.isRequired,
        })
    ).isRequired,
};

export default ActiveNode;
