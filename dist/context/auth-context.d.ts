import React from 'react';
export interface IAuthContextType {
    isAuthenticated?: boolean;
    permissions: string[] | null;
    setPermissions: React.Dispatch<React.SetStateAction<string[] | null>> | null;
    setIsAuthenticated: React.Dispatch<React.SetStateAction<boolean>> | null;
}
export interface IAuthProviderParams {
    children: React.ReactNode;
    token: string | null;
    claims: string[] | null;
    onInit: () => {};
}
declare const AuthContext: React.Context<IAuthContextType>;
declare function AuthProvider(props: IAuthProviderParams): import("react/jsx-runtime").JSX.Element;
export { AuthContext, AuthProvider };
