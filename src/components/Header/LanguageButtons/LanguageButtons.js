import React, { useContext } from "react";

import Stack from "@mui/material/Stack";
import Button from "@mui/material/Button";

import { LanguageContext } from "../../../contexts/LanguageContext";

const LanguageButtons = () => {
  const [language, setLanguage] = useContext(LanguageContext);

  return (
    <Stack spacing={2} direction="row">
      <Button
        variant="contained"
        color={language === 'en' ? 'secondary' : 'primary'}
        onClick={() => setLanguage('en')}
      >
        ENG
      </Button>
      <Button
        variant="contained"
        color={language === 'pl' ? 'secondary' : 'primary'}
        onClick={() => setLanguage('pl')}
      >
        PL
      </Button>
    </Stack>
  )
}

export default LanguageButtons