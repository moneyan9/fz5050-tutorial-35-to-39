import { useEffect, useState } from "react";

//関数を受け付けるpropsの型定義
interface MyListProps {
    getItems(): number[];
}


const MyList = ({ getItems }: MyListProps) => {

    //hook
    const [items, setItems] = useState<number[]>([]);

    //getItems()オブジェクトの監視
    useEffect(
        () => {
            setItems(getItems());
            console.log('updating items');
        }
        , [getItems]
    );


    return (
        <div>
            {items.map(
                (item) => {
                    return (<div key={item}> {item} </div>);
                }
            )}
        </div>
    );
}

export default MyList