import React, {useState} from "react";
import {ListItem, ListItemText} from "@mui/material";
import {List} from "@material-ui/core";

import {handleSearch} from "../utility/handeSearchFunction";
import { useLocal } from "../contexts/LocalStorageProvider";









const SearchedText = () => {
    const [list, setList] = useState(() => {
        const saved = localStorage.getItem("searchHistory");
        const initialValue = JSON.parse(saved);
        return initialValue || [];
    });




    // const dispatchUserLogge = useLocal().dispatch;
    const stateOfLocal = useLocal().state;




    function onlyUnique(value, index, self) {
        return self.indexOf(value) === index;
    }


    const handleClick= ()=> {
        // handleSearch(nameValue,languageValue)
    }


const mappedList = stateOfLocal.filter(onlyUnique).map(text => (

    <ListItem button onClick={handleClick}>
        <ListItemText primary={text}/>
    </ListItem>

))

    return (
        <List>
            {mappedList}
        </List>
    )}

export default SearchedText;