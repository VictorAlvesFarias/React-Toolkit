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
    useEffect(() => {
        props.onInit();
    }, []);
    return (_jsx(AuthContext.Provider, { value: {
            isAuthenticated: isAuthenticated,
            permissions: permissionsContext,
            setPermissions: setPermissionsContext,
            setIsAuthenticated: setIsAuthenticated
        }, children: props.children }));
}
;
export { AuthContext, AuthProvider };
