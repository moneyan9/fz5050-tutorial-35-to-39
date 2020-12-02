import { useReducer } from 'react';

//stateの初期値
const initalState: number = 0;


//受け付けるactionの型
type CountAction = {
    type: string;
    payload: number;
};


const reducer = (state: number, action: CountAction) => {
    switch (action.type) {
        case 'count/increment':
            console.log("count/increment");
            return (state + 1 + action.payload);

        case 'count/decrement':
            console.log("count/decrement");
            return (state - 1 + action.payload);
        default:
            return state;
    }
}

const HookDemo2 = () => {

    //const [count, setCount] = useState(0);
    const [count, dispatch] = useReducer(
        reducer
        , initalState
    );


    function handleIncrement() {
        //setCount(count+1);
        dispatch(
            {
                type: 'count/increment',
                payload: 0
            }
        );
    }

    function handleDecrement() {
        //setCount(count-1);
        dispatch(
            {
                type: 'count/decrement',
                payload: 0
            }
        );
    }


    return (
        <div>
            <p>Count :{count}</p>
            <button onClick={handleIncrement}> increment </button>
            <button onClick={handleDecrement}> decrement </button>
        </div>
    );

}

export default HookDemo2