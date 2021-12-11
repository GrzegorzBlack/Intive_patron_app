import React from "react";

import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import MenuIcon from '@mui/icons-material/Menu';


import LanguageButtons from "./LanguageButtons/LanguageButtons";
import SearchInputs from "./SearchInputs/SearchInputs";
import {Avatar} from "@material-ui/core";
import IntiveLogo from "../../assets/intive_logo.jpg";

const Header = () => {
    return (
        <Box sx={{ flexGrow: 1 }}>
            <AppBar position="static">
                <Toolbar>
                    <Box >
                        <Avatar
                        alt="logo"
                        src={IntiveLogo}
                        style={{ height: '60px', width: '60px' }}
                        />
                    </Box>
                    <Typography
                        variant="h6"
                        noWrap
                        component="div"
                        sx={{ flexGrow: 1, display: { xs: 'none', sm: 'block' } }}
                    >
                        Patron app!
                    </Typography>
                    <SearchInputs />
                    <LanguageButtons />
                </Toolbar>
            </AppBar>
        </Box>
    );
}

export default Header;