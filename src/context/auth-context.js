import React from 'react';

const authContext = React.createContext({
    authernticated: false,
    login: () => { }
});

export default authContext;