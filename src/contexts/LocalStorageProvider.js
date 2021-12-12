// import {useReducer, createContext, useContext} from "react";
//
//
//
//
//
//
//     const saved = localStorage.getItem("searchHistory");
//     const initialValue = JSON.parse(saved);
//     const localStorageArray= initialValue ? initialValue : [];
//
//
// const LocalStorageContext = createContext();
//
// const userReducer = (state, action) => {
//     switch (action.type) {
//         case "SEARCHED_DATA":
//             return state;
//         default:
//             throw new Error("Something went wrong with textSearch!");
//     }
// };
//
// const LocalStorageProvider = ({ children }) => {
//     const [state, dispatch] = useReducer(userReducer, localStorageArray);
//
//     return (
//         <LocalStorageContext.Provider value={{ state, dispatch }}>
//             {children}
//         </LocalStorageContext.Provider>
//     );
// };
//
// export default LocalStorageProvider;
//
// export const useLocal = () => useContext(LocalStorageContext);