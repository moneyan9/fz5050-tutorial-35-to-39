import { ChangeEvent, useState } from 'react';

//子コンポーネントが受け付けるpropsの型
interface NewNoteInputProps {
    notes: string[]
    setNotes(notes): void;
}


const NewNoteInput = ({ notes, setNotes }: NewNoteInputProps) => {

    //子コンポーネントのテキストエリアの値の制御用
    const [note, setNote] = useState("");

    const updateNote = (event: ChangeEvent<HTMLInputElement>) => {
        setNote(event.target.value);
    }


    //ボタンクリック時
    const onAddNoteClick = () => {
        setNotes([...notes, note]); //親から受け取ったhoookで書き換え
        setNote("");
    }

    return (
        <div>
            <input onChange={updateNote} value={note} />
            <button onClick={onAddNoteClick} >add note</button>
        </div>
    );
}

export default NewNoteInput