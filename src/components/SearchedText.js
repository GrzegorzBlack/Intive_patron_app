import React, {useContext, useState} from "react";
import {ListItem, ListItemSecondaryAction, ListItemText} from "@mui/material";
import {List} from "@material-ui/core";

import {handleSearch} from "../utility/handeSearchFunction";
import {SearchTextsContext} from "../contexts/SearchTextsContext";
import DeleteForeverIcon from '@mui/icons-material/DeleteForever';
import IconButton from "@mui/material/IconButton";
import searchPagesAPI from "../apiCalls/searchPagesAPI";
import {SearchParamsContext} from "../contexts/SearchParamsContext";
import {LanguageContext} from "../contexts/LanguageContext";










const SearchedText = () => {
    // const [list, setList] = useState(() => {
    //     const saved = localStorage.getItem("searchHistory");
    //     const initialValue = JSON.parse(saved);
    //     return initialValue || [];
    // });
    const [searchTexts, setSearchTexts] = useContext(SearchTextsContext);
    const [searchParams, setSearchParams] = useContext(SearchParamsContext);
    const [language] = useContext(LanguageContext);







    function onlyUnique(value, index, self) {
        return self.indexOf(value) === index;
    };




    const handleSearch = (text) => {
            searchPagesAPI(
                text,
                searchParams.limit,
                language,
                handleSearchResults
            );

    };

    const handleSearchResults = (results) => {
        setSearchParams({
            ...searchParams,
            searchText: '',
            results

        });
    };

    const handleDelete = (text) => {
        setSearchTexts(searchTexts.filter((element) => {
               return  element !== text
            })
        )

    };




const mappedList = searchTexts.filter(onlyUnique).map(text => (


    <ListItem button onDoubleClick={() => handleSearch(text)} key={text}>
        <ListItemText primary={text}/>
            <ListItemSecondaryAction>
                <IconButton onClick={() => handleDelete(text)}>
                    <DeleteForeverIcon />
                </IconButton>
            </ListItemSecondaryAction>
    </ListItem>



))

    return (
        <List>
            {mappedList}
        </List>
    )}

export default SearchedText;