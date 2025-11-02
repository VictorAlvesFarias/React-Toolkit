import React, { createContext, useState, useEffect } from 'react';

interface IBaseContextType {
  dictionary: Record<string, string>;
  setItem: (key: string, value: string) => void;
  removeItem: (key: string) => void;
  getItem: (key: string) => string | undefined;
}

interface IBaseProviderParams {
  children: React.ReactNode;
  initialDictionary?: Record<string, string>;
  onInit?: (context: IBaseContextType) => void;
}

const BaseContext = createContext<IBaseContextType>({
  dictionary: {},
  setItem: () => { },
  removeItem: () => { },
  getItem: () => undefined,
});

function BaseProvider(props: IBaseProviderParams) {
  const [dictionary, setDictionary] = useState<Record<string, string>>(props.initialDictionary || {});

  const setItem = (key: string, value: string) => {
    setDictionary(prev => ({ ...prev, [key]: value }));
  };

  const removeItem = (key: string) => {
    setDictionary(prev => {
      const newDict = { ...prev };
      delete newDict[key];
      
      return newDict;
    });
  };

  const getItem = (key: string) => {
    return dictionary[key];
  };

  const providerValues: IBaseContextType = {
    dictionary,
    setItem,
    removeItem,
    getItem,
  };

  useEffect(() => {
    if (props.onInit) props.onInit(providerValues);
  }, []);

  return (
    <BaseContext.Provider value={providerValues}>
      {props.children}
    </BaseContext.Provider>
  );
}

export {
  BaseContext,
  BaseProvider,
  IBaseContextType,
  IBaseProviderParams
};
