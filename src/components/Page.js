import React, {useContext, useEffect, useState} from "react";

import {useParams} from "react-router-dom";
import { Link } from 'react-router-dom';
import axios from "axios";
import Box from '@mui/material/Box';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';
import {SearchTextsContext} from "../contexts/SearchTextsContext";
import {PageLanguageContext} from "../contexts/PageLanguageContext";
import {LanguageContext} from "../contexts/LanguageContext";
import Button from '@mui/material/Button';
// import languagePageAPI from "../apiCalls/searchPagesAPI";
import {SearchParamsContext} from "../contexts/SearchParamsContext";
import languagePageAPI from "../apiCalls/languagePageAPI";




const Page = () => {
    let { title } = useParams();
    const [page, setPage] = useState({});
    const [otherLanguage, setOtherLanguage] = useState("");


    const [pageLanguages, setPageLanguages] = useContext(PageLanguageContext);
    const [language, setLanguage] = useContext(LanguageContext);
    const [searchParams, setSearchParams] = useContext(SearchParamsContext);

    const handleChange = (e) => {
        console.log(e.target.code)
        setOtherLanguage(e.target.code)
        languagePageAPI()
    };



    const languagePageAPI = () => {

        const endpoint = `https://${otherLanguage}.wikipedia.org/w/rest.php/v1/page/${title}`;

        axios.get(endpoint)
            .then((res, err) => {
                const data = res.data;
                setPage(data);
                console.log(data)
            })

    }



    useEffect( () => {
        const endpoint = `https://en.wikipedia.org/w/rest.php/v1/page/${title}/bare`;
        const languageEndpoint = `https://en.wikipedia.org/w/rest.php/v1/page/${title}/links/language`;
        axios.get(endpoint)
            .then((res, err) => {
                const data = res.data;
                setPage(data);
                // console.log(data)
            })
        axios.get(languageEndpoint)
            .then((res, err) => {
                const data = res.data;
                console.log(data)
                setPageLanguages(data);
            })

    },[title])

const mappedLanguages = pageLanguages.map( (obj) => (
        <MenuItem value={obj.name} key={obj.name} >{obj.name}</MenuItem>

))


    return (
        <>
    <div>
        <iframe
            title={`${page.title}`}
            src={page.html_url}>
        </iframe>
    </div>
            <Link to={`/`}>
                <Button variant="contained" size="medium"
                    m={{
                        position: "fixed",
                        width: 80,
                        height: 80,
                        left: '5%',
                        bottom: '10%'
                        }} >
                    Go to main site
                </Button>
            </Link>
    <Box sx={{
        position: "fixed",
        width: 120,
        height: 80,
        right: '5%',
        bottom: '10%'}}>
        <FormControl fullWidth>
            <InputLabel >Language</InputLabel>
            <Select
                value={language}
                label="Language"
                onChange={handleChange}
            >
                {mappedLanguages}
            </Select>
        </FormControl>
    </Box>
        </>
    )}

export default Page;