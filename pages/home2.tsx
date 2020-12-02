import NewNoteInput from "../components/NewNoteInput"
import { useState } from "react";


const Home2 = () => {


    const [notes, setNotes] = useState<string[]>([]);


    return (
        <div>
            {/* 子コンポーネントにpropsとしてnotesとsetNotesを渡す */}
            <NewNoteInput notes={notes} setNotes={setNotes} />
            <hr />
            <pre>this is parent componet</pre>
            <ul>

                {notes.map((note) => {
                    return (
                        <li key={note}> {note}</li>
                    );
                })
                }
            </ul>


        </div>
    );
}

export default Home2