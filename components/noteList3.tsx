interface NoteListProps {
    notes: string[];
}

const NoteList3 = ({ notes }: NoteListProps) => {
    return (
        <div>
            <ul>
                {notes?.map((note) => {
                    return (
                        <li key={note}> {note}</li>
                    );
                })
                }
            </ul>
        </div>
    );
}

export default NoteList3