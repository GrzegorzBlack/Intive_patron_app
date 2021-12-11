import React, { useContext, useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { Link } from 'react-router-dom';

import Box from '@mui/material/Box';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';
import Button from '@mui/material/Button';

import { PageLanguageContext } from "../contexts/PageLanguageContext";
import { LanguageContext } from "../contexts/LanguageContext";

import getHtmlPageAPI from "../apiCalls/getHtmlPageAPI";
import getPageLanguagesAPI from "../apiCalls/getPageLanguagesAPI";

const Page = () => {
  let { title } = useParams();
  const [language] = useContext(LanguageContext);
  const [page, setPage] = useState({});
  const [otherLanguage, setOtherLanguage] = useState({
    code: language,
    name: language === 'en' ? 'English' : 'Polski',
    title: title
  });
  const [pageLanguages, setPageLanguages] = useContext(PageLanguageContext);

  useEffect(() => {
    getHtmlPageAPI(otherLanguage.code, otherLanguage.title, setPage);
    getPageLanguagesAPI(otherLanguage.code, otherLanguage.title, setPageLanguages);
  }, [otherLanguage])

  const handleChange = e => {
    const code = e.target.value;
    const selectedLanguage = pageLanguages.find(singleLanguage => singleLanguage.code === code);
    setOtherLanguage({
      code: selectedLanguage.code,
      name: selectedLanguage.name,
      title: selectedLanguage.title
    })
  };

  const mappedLanguages = pageLanguages.map(obj => <MenuItem value={obj.code} key={obj.code}>{obj.name}</MenuItem>);

  return (
    <>
      <div dangerouslySetInnerHTML={{__html: page}}/>
      <Link to={`/`}>
        <Button variant="contained" size="medium"
                m={{
                  position: "fixed",
                  width: 80,
                  height: 80,
                  left: '5%',
                  bottom: '10%'
                }}>
          Go to main site
        </Button>
      </Link>
      <Box sx={{
        position: "fixed",
        width: 120,
        height: 80,
        right: '5%',
        bottom: '10%'
      }}
      >
        <FormControl fullWidth>
          <InputLabel>Language</InputLabel>
          <Select
            value={otherLanguage.code}
            label="Language"
            onChange={handleChange}
          >
            <MenuItem value={otherLanguage.code} key={otherLanguage.code}>{otherLanguage.name}</MenuItem>
            {mappedLanguages}
          </Select>
        </FormControl>
      </Box>
    </>
  )
}

export default Page;