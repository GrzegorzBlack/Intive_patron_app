import * as React from 'react';

import Box from '@mui/material/Box';
import Slide from '@mui/material/Slide';
import FormControlLabel from '@mui/material/FormControlLabel';
import IconButton from '@mui/material/IconButton';
import HistoryIcon from '@mui/icons-material/History';
import SearchedText from "./SearchedText";



// <Box sx={{ height: 200,
//     position: "fixed",
//     right: '0%',
//     bottom: '40%'
//
// }}>
//     <List>
//         <SearchedText/>
//     </List>
// </Box>


// const icon = (
//     <Paper sx={{ m: 1 }} elevation={4}>
//         <Box component="svg" sx={{ width: 100, height: 100 }}>
//             <Box
//                 component="polygon"
//                 sx={{
//                     fill: (theme) => theme.palette.common.white,
//                     stroke: (theme) => theme.palette.divider,
//                     strokeWidth: 1,
//                 }}
//                 points="0,100 50,00, 100,100"
//             />
//         </Box>
//     </Paper>
// );

export default function HistorySlider() {
    const [checked, setChecked] = React.useState(false);

    const handleChange = () => {
        setChecked((prev) => !prev);
    };

    return (
        <Box sx={{ height: 200,
                    position: "fixed",
                    right: '0%',
                    bottom: '20%'

        }}>
            <Box sx={{ width: 300}}>
                <FormControlLabel
                    sx={{
                    position: 'fixed',
                    bottom: "5%",
                    right: "0%",
                    fontSize: 100,
                    color: 'blue'
                }}
                    control={<IconButton checked={checked} onClick={handleChange}>
                        <HistoryIcon sx={{
                            fontSize: 100,
                            color: 'blue'
                        }}/>
                    </IconButton>
                        }
                    label="Show Search History"
                />
                <Slide direction="left" in={checked} mountOnEnter unmountOnExit>
                    <Box sx={{ height: 200,
                        position: "fixed",
                        right: '5%',
                        bottom: '50%'

                    }}>

                        <SearchedText/>

                    </Box>

                </Slide>
            </Box>
        </Box>
    );
}
