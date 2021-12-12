import React, {useContext} from "react";

import Stack from "@mui/material/Stack";
import Button from "@mui/material/Button";
import Box from '@mui/material/Box';
import Modal from '@mui/material/Modal';

import {LanguageContext} from "../../../contexts/LanguageContext";

export const LanguageButtons = () => {
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

// export const LanguageButtons








































































// Hidden modal





const style = {
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    width: 400,
    bgcolor: 'background.paper',
    border: '2px solid #000',
    boxShadow: 24,
    pt: 2,
    px: 4,
    pb: 3,
};

const Child =()=> {
    const [open, setOpen] = React.useState(false);
    const handleOpen = () => {
        setOpen(true);
    };
    const handleClose = () => {
        setOpen(false);
    };

    return (
        <React.Fragment>
            <Button onClick={handleOpen}>Open Child Modal</Button>
            <Modal
                hideBackdrop
                open={open}
                onClose={handleClose}
                aria-labelledby="child-modal-title"
                aria-describedby="child-modal-description"
            >
                <Box sx={{ ...style, width: 200 }}>
                    <h2 id="child-modal-title">Text in a child modal</h2>
                    <p id="child-modal-description">
                        Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                    </p>
                    <Button onClick={handleClose}>Close Child Modal</Button>
                </Box>
            </Modal>
        </React.Fragment>
    );
}

export const Nested =()=> {
    const [open, setOpen] = React.useState(false);
    const handleOpen = () => {
        setOpen(true);
    };
    const handleClose = () => {
        setOpen(false);
    };

    return (
        <div>
            <Button onClick={handleOpen}
                    sx={{position: 'fixed',
                        top: "5%",
                        left: "0%",
                        cursor: 'default',
                        hover: "transparent",

                    }}/>


            <Modal
                open={open}
                onClose={handleClose}
                aria-labelledby="parent-modal-title"
                aria-describedby="parent-modal-description"
            >
                <Box sx={{ ...style, width: 400 }}>
                    <h2 id="parent-modal-title">Text in a modal</h2>
                    <p id="parent-modal-description">
                        Duis mollis, est non commodo luctus, nisi erat porttitor ligula.
                    </p>
                    <Child />
                </Box>
            </Modal>
        </div>
    );
}









