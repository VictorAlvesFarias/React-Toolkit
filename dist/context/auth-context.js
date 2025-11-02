import { jsx as _jsx } from "react/jsx-runtime";
import { createContext, useEffect, useState } from 'react';
const AuthContext = createContext({
    isAuthenticated: false,
    permissions: [],
    setPermissions: null,
    setIsAuthenticated: null,
});
function AuthProvider(props) {
    const [isAuthenticated, setIsAuthenticated] = useState(!!props.token);
    const [permissionsContext, setPermissionsContext] = useState(props.claims);
    const providerValues = {
        isAuthenticated: isAuthenticated,
        permissions: permissionsContext,
        setPermissions: setPermissionsContext,
        setIsAuthenticated: setIsAuthenticated
    };
    useEffect(() => {
        props.onInit(providerValues);
    }, []);
    return (_jsx(AuthContext.Provider, { value: providerValues, children: props.children }));
}
;
export { AuthContext, AuthProvider };
