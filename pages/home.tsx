import { useState, ChangeEvent, KeyboardEvent } from 'react';

const Home = () => {

    const [note, setNote] = useState<string>("");   //入力フォームの値管理
    const [notes, setNotelist] = useState<string[]>([]);//表示用のデータリスト


    //入力フォームとバインド
    const updateNote = (event: ChangeEvent<HTMLInputElement>) => {
        setNote(event.target.value);
    }

    //add noteボタンの処理
    const onAddNoteClick = () => {
        setNotelist([...notes, note]); //既存リストと新規データを連結してセット
        setNote("");
    }

    //enterを押した際にも投入されるようにする(vueのv-on:keyup.enter相当)
    const handleKeyPress = (event: KeyboardEvent<HTMLInputElement>) => {
        if (event.key === 'Enter') {
            onAddNoteClick();
        }
    }

    return (
        <div>
            <input onChange={updateNote} value={note} type="text" onKeyPress={handleKeyPress} />
            <button onClick={onAddNoteClick} >add note</button>
            {JSON.stringify(notes)}
            <hr />
           total:{notes.length}  debug:{note}
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

export default Home