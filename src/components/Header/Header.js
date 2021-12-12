import React from "react";

import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import {Avatar} from "@material-ui/core";


import {Nested} from "./LanguageButtons/LanguageButtons"
import {LanguageButtons} from "./LanguageButtons/LanguageButtons";
import SearchInputs from "./SearchInputs/SearchInputs";
import IntiveLogo from "../../assets/intive_logo.jpg";
import IconButton from "@mui/material/IconButton";

const Header = () => {

    // const [open, setOpen] = React.useState(false);
    // const handleOpen = () => setOpen(true);
    // const handleClose = () => setOpen(false);
    return (
        <Box sx={{flexGrow: 1}}>
            <AppBar position="static">
                <Toolbar>
                    <Box >

                        {/*<Avatar*/}
                        {/*    alt="logo"*/}
                        {/*    src={IntiveLogo}*/}
                        {/*    style={{height: '60px', width: '60px'}}*/}
                        {/*/>*/}

                        <Nested />
                    </Box>
                    <Typography
                        variant="h6"
                        noWrap
                        component="div"
                        style={{marginLeft: '25px'}}
                        sx={{flexGrow: 1, display: {xs: 'none', sm: 'block'}}}
                    >
                        Patron app!
                    </Typography>
                    <SearchInputs/>
                    <LanguageButtons/>
                </Toolbar>
            </AppBar>
        </Box>
    );
}

export default Header;