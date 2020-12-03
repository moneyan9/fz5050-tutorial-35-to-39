import { useContext } from "react";
import { UserContext } from "../UserContext";
import Link from 'next/link';

const UseContextDemoPage2 = () => {

    //受け付ける引数は[]ではなく、｛ ｝で囲む
    const { value, setValue } = useContext(UserContext);

    return (
        <div>
            {value}
            <button value={value} onClick={() => setValue("hello!!!")}>change</button>
            <hr />
            <Link href="/usecontextdemopage1">
                <a>usercontextdemo</a>
            </Link>
        </div>
    );
}

export default UseContextDemoPage2