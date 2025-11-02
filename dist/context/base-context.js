import { jsx as _jsx } from "react/jsx-runtime";
import { createContext, useState, useEffect } from 'react';
const BaseContext = createContext({
    dictionary: {},
    addItem: () => { },
    removeItem: () => { },
    getItem: () => undefined,
});
function DictionaryProvider(props) {
    const [dictionary, setDictionary] = useState(props.initialDictionary || {});
    const addItem = (key, value) => {
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
        addItem,
        removeItem,
        getItem,
    };
    useEffect(() => {
        if (props.onInit)
            props.onInit(providerValues);
    }, []);
    return (_jsx(BaseContext.Provider, { value: providerValues, children: props.children }));
}
export { BaseContext, DictionaryProvider };
