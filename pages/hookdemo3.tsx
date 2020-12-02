import { useReducer, useRef } from "react";
import { nanoid } from "nanoid"; //ランダムな文字列生成用モジュール


interface Note {
    id: string;
    name: string;
};

type NoteState = Note[];

type NoteAction = {
    type: string;
    payload: string;
};


const initialState: Note[] = [];

const reducer = (state: NoteState = [], action: NoteAction) => {
    switch (action.type) {
        case "note/add": {
            return [
                ...state,
                {
                    id: nanoid(),
                    name: action.payload
                }
            ];

        }
        case "note/remove": {
            break;
        }
        default:
            return state;
    }

}


const ReducerDemo2 = () => {

    const [notes, dispatch] = useReducer(
        /*
        (state:NoteState=[],action:NoteAction) => {
            
            switch(action.type){
                case "note/add":{
                    return [
                        ...state,
                        {
                            id:nanoid(),
                            name:action.payload
                        }
                    ];
 
                }
                case "note/remove":{
                    break;
                }
                default:
                    return state;
            }
        }
        */
        reducer
        , initialState);



    const textRef = useRef<HTMLInputElement>(null);

    function addNote() {

        dispatch({
            type: "note/add",
            payload: textRef.current!.value
        });

        textRef.current!.value = "";
    }

    return (
        <div>
            <div>
                <input type="text" ref={textRef} />
                <button onClick={addNote}> add note</button>
            </div>
            <ul>
                {notes!.map(
                    (note) => {
                        return (
                            <li key={note.id}>
                                {note.id} - {note.name}
                            </li>
                        );
                    }
                )}
            </ul>


        </div>
    );

}

export default ReducerDemo2