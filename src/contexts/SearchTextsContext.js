import React, { useState, createContext } from 'react';

export const SearchTextsContext = createContext();

export const SearchTextsProvider = ({ children }) => {
    const [searchTexts, setSearchTexts] = useState([]);
    return (
        <SearchTextsContext.Provider value={[searchTexts, setSearchTexts]}>
            {children}
        </SearchTextsContext.Provider>
    );
}