import { useReducer, createContext, useContext } from "react";

const inputText= "";

const TextContext = createContext();

const userReducer = (state, action) => {
    switch (action.type) {
        case "NEW_SEARCH_TEXT":
            return {
                ...action.payload,
            };
        default:
            throw new Error("Something went wrong with textSearch!");
    }
};

const TextProvider = ({ children }) => {
    const [state, dispatch] = useReducer(userReducer, inputText);

    return (
        <TextContext.Provider value={{ state, dispatch }}>
            {children}
        </TextContext.Provider>
    );
};

export default TextProvider;

export const useText = () => useContext(TextContext);