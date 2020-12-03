import { useContext } from "react";
import { UserContext } from "../UserContext";
import Link from 'next/link';

const UseContextDemoPage1 = () => {

    //受け付ける引数は[]ではなく、｛ ｝で囲む
    const { value, setValue } = useContext(UserContext);

    return (
        <div>
            {value}
            <hr />
            <Link href="/usecontextdemopage2">
                <a>usercontextdemopage2</a>
            </Link>
        </div>
    );
}

export default UseContextDemoPage1