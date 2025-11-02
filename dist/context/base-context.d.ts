import React from 'react';
interface IBaseContextType {
    dictionary: Record<string, string>;
    addItem: (key: string, value: string) => void;
    removeItem: (key: string) => void;
    getItem: (key: string) => string | undefined;
}
interface IBaseProviderParams {
    children: React.ReactNode;
    initialDictionary?: Record<string, string>;
    onInit?: (context: IBaseContextType) => void;
}
declare const BaseContext: React.Context<IBaseContextType>;
declare function DictionaryProvider(props: IBaseProviderParams): import("react/jsx-runtime").JSX.Element;
export { BaseContext, DictionaryProvider, IBaseContextType, IBaseProviderParams };
