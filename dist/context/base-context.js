import { jsx as _jsx } from "react/jsx-runtime";
import { createContext, useState, useEffect } from 'react';
const BaseContext = createContext({
    dictionary: {},
    setItem: () => { },
    removeItem: () => { },
    getItem: () => undefined,
});
function BaseProvider(props) {
    const [dictionary, setDictionary] = useState(props.initialDictionary || {});
    const setItem = (key, value) => {
        setDictionary(prev => ({ ...prev, [key]: value }));
    };
    const removeItem = (key) => {
        setDictionary(prev => {
            const newDict = { ...prev };
            delete newDict[key];
            return newDict;
        });
    };
    const getItem = (key) => {
        return dictionary[key];
    };
    const providerValues = {
        dictionary,
        setItem,
        removeItem,
        getItem,
    };
    useEffect(() => {
        if (props.onInit)
            props.onInit(providerValues);
    }, []);
    return (_jsx(BaseContext.Provider, { value: providerValues, children: props.children }));
}
export { BaseContext, BaseProvider };
