import { createContext } from 'react';

const defaultContext = {
    counter: 0,
    Loading: false,
    setLoading: () => { },
    setCounter: () => { },
}
export const Context = createContext(defaultContext);