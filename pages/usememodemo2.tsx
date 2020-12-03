import { useState, useMemo, useEffect } from 'react';

//重い処理をしている関数のエミュレータ
function slowFunction(num: number) {

    console.log('Call slow function');
    for (let i = 0; i <= 1000000000; i++) {
        // wait 
    }

    return (num * 2);
}


const UseMemoDemo = () => {

    const [number, setNumber] = useState<number>(0);
    const [dark, setDark] = useState<boolean>(false);

    //const doubleNumber:number = slowFunction(number);
    const doubleNumber = useMemo<number>(
        () => {
            return slowFunction(number)
        }
        , [number]
    );

    const themeStyles = {
        backgroundColor: dark ? 'black' : 'white',
        color: dark ? 'white' : 'black'
    };



    useEffect(
        () => {
            console.log('theme changed');
        }
        , [themeStyles]
    );

    return (
        <div>
            <input type="number" value={number} onChange={e => setNumber(parseInt(e.target.value))} />
            <button onClick={() => setDark(prevDark => !prevDark)}> changeTheme </button>
            <div style={themeStyles}>{doubleNumber} </div>
        </div>
    );
}

export default UseMemoDemo