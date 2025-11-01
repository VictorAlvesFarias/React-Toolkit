import React from 'react';
import { createContext, useEffect, useState } from 'react';

interface IAuthContextType {
  isAuthenticated?: boolean;
  permissions: string[] | null
  setPermissions: React.Dispatch<React.SetStateAction<string[] | null>> | null;
  setIsAuthenticated: React.Dispatch<React.SetStateAction<boolean>> | null;
}

interface IAuthProviderParams {
  children: React.ReactNode;
  token: string | null;
  claims: string[] | null;
  onInit: () => {}
}

const AuthContext = createContext<IAuthContextType>({
  isAuthenticated: false,
  permissions: [],
  setPermissions: null,
  setIsAuthenticated: null,
});

function AuthProvider(props: IAuthProviderParams) {
  const [isAuthenticated, setIsAuthenticated] = useState(!!props.token);
  const [permissionsContext, setPermissionsContext] = useState(props.claims);

  useEffect(() => {
    props.onInit();
  }, []);

  return (
    <AuthContext.Provider value={{
      isAuthenticated: isAuthenticated,
      permissions: permissionsContext,
      setPermissions: setPermissionsContext,
      setIsAuthenticated: setIsAuthenticated
    }}>
      {props.children}
    </AuthContext.Provider>
  );
};

export {
  AuthContext,
  AuthProvider,
  IAuthContextType,
  IAuthProviderParams
}