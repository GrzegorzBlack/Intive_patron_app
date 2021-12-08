import * as React from 'react';

import { styled, alpha } from '@mui/material/styles';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import InputBase from '@mui/material/InputBase';
import MenuIcon from '@mui/icons-material/Menu';
import SearchIcon from '@mui/icons-material/Search';
import Stack from '@mui/material/Stack';
import Button from '@mui/material/Button';
import {useState} from "react";
import { useText } from "../contexts/TextProvider";
import { useLocal } from "../contexts/LocalStorageProvider";
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';
import axios from "axios";


const Search = styled('div')(({ theme }) => ({
    position: 'relative',
    borderRadius: theme.shape.borderRadius,
    backgroundColor: alpha(theme.palette.common.white, 0.15),
    '&:hover': {
        backgroundColor: alpha(theme.palette.common.white, 0.25),
    },
    marginLeft: 0,
    width: '100%',
    [theme.breakpoints.up('sm')]: {
        marginLeft: theme.spacing(1),
        width: 'auto',
    },
}));

const SearchIconWrapper = styled('div')(({ theme }) => ({
    padding: theme.spacing(0, 2),
    height: '100%',
    position: 'absolute',
    pointerEvents: 'none',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
}));

const StyledInputBase = styled(InputBase)(({ theme }) => ({
    color: 'inherit',
    '& .MuiInputBase-input': {
        padding: theme.spacing(1, 1, 1, 0),
        // vertical padding + font size from searchIcon
        paddingLeft: `calc(1em + ${theme.spacing(4)})`,
        transition: theme.transitions.create('width'),
        width: '100%',
        [theme.breakpoints.up('sm')]: {
            width: '12ch',
            '&:focus': {
                width: '20ch',
            },
        },
    },
}));




const Header =({ setLanguageFunc})=> {
const [colorOne, setColorOne]=useState('secondary');
const [colorTwo, setColorTwo]=useState('primary');

const [input, setInput] = useState('');


    const [age, setAge] = React.useState('');

    const dispatchNewText = useText().dispatch;
    const stateOfText = useText().state;


    const dispatchLocal = useLocal().dispatch;
    const stateOfLocal = useLocal().state;


    const handleChange = (event) => {
        setAge(event.target.value);
    };

 const pushedButtonOne =()=> {
     setColorOne('secondary');
     setColorTwo('primary');
     setLanguageFunc();
 }
     const pushedButtonTwo =()=> {
         setColorTwo('secondary');
         setColorOne('primary');
         setLanguageFunc();
     }

    const handleSearchAPI = stateOfText => {
        dispatchNewText({ type: "NEW_SEARCH_TEXT", payload: stateOfText});

        const endpoint = `https://en.wikipedia.org/w/rest.php/v1/search/page`;
        const config = {
            params: {
                q: stateOfText,
                limit: 20
            }
        }
        axios.get(endpoint, config)
            .then((res, err) => {
                const data = res.data;
                const localStorageArray = data.pages;
                dispatchLocal({ type: "SEARCHED_DATA", localStorageArray });
                //console.log(data)
            })

        stateOfLocal.push(stateOfText);
        console.log(stateOfLocal)
        window.localStorage.setItem('searchHistory', JSON.stringify(stateOfText));
    }






    const handleSearch = e => {
        if (e.keyCode === 13) {
            console.log(`Działa ${stateOfText} aaa`)
            dispatchNewText({ type: "NEW_SEARCH_TEXT", payload: input });

            handleSearchAPI("water");
            // const payload = '';
            dispatchNewText({ type: "NEW_SEARCH_TEXT", payload: '' });
        }
    }

    return (
        <Box sx={{ flexGrow: 1 }}>
            <AppBar position="static">
                <Toolbar>
                    <IconButton
                        size="large"
                        edge="start"
                        color="inherit"
                        aria-label="open drawer"
                        sx={{ mr: 2 }}
                    >
                        <MenuIcon />
                    </IconButton>
                    <Typography
                        variant="h6"
                        noWrap
                        component="div"
                        sx={{ flexGrow: 1, display: { xs: 'none', sm: 'block' } }}
                    >
                        Patron app!
                    </Typography>
                    <Box sx={{ width: 80, backgroundColor: "white" }}>
                        <FormControl fullWidth>
                            <InputLabel id="demo-simple-select-label" >Age</InputLabel>
                            <Select
                                labelId="demo-simple-select-label"
                                id="demo-simple-select"
                                value={age}
                                label="Age"
                                onChange={handleChange}
                            >
                                <MenuItem value={10}>10</MenuItem>
                                <MenuItem value={20}>20</MenuItem>
                                <MenuItem value={50}>50</MenuItem>
                                <MenuItem value={100}>100</MenuItem>
                            </Select>
                        </FormControl>
                    </Box>
                    <Stack spacing={2} direction="row">

                        <Button variant="contained" color={colorOne} onClick={pushedButtonOne}>ENG</Button>
                        <Button variant="contained" color={colorTwo} onClick={pushedButtonTwo}>PL</Button>
                    </Stack>
                    <Search>
                        <SearchIconWrapper>
                            <SearchIcon />
                        </SearchIconWrapper>
                        <StyledInputBase
                            onKeyDown={handleSearch}
                            value={input}
                            onChange={(e) => setInput(e.target.value)}
                            placeholder="Search…"
                        />
                    </Search>
                </Toolbar>
            </AppBar>
        </Box>
    );
}

export default Header;