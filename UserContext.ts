import { createContext } from 'react';

export interface MyContextType {
    value: string;
    setValue: (value: string) => void;
}

//初期値
const initialMyContext: MyContextType = {
    value: "",
    setValue: () => { }
}

export const UserContext = createContext<MyContextType>(initialMyContext);  