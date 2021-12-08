import React, {useContext} from "react";

import { makeStyles } from '@material-ui/styles';
import { Grid } from "@material-ui/core";

import ArticleCard from './Card'
import Header from "./Header/Header";
import HistorySlider from "./HistorySlider";


import {SearchParamsContext} from "../contexts/SearchParamsContext";

const useStyles = makeStyles({
    MainContainer: {
        paddingTop: "20px",
        paddingLeft: "50px",
        paddingRight: "50px"
    },
});

const MainContent = () => {
    const classes = useStyles();
    const [searchParams] = useContext(SearchParamsContext);

    // const [name, setName] = useState(() => {
    //     const saved = localStorage.getItem("searchHistory");
    //     const initialValue = JSON.parse(saved);
    //     return initialValue || [];
    // });


    // useEffect( () => {
    //     const dataFromStorage = window.localStorage.getItem('searchHistory');
    //     setName(JSON.parse(dataFromStorage))
    // },[name])

    const renderCards = () => {
        return searchParams.results.map(page => {
            const {id} = page;

            return (
                <Grid item container justifyContent="center" xs={12} sm={4} key={id}>
                    <ArticleCard oneCard={page} />
                </Grid>
            )
        })
    }

    return (
        <Grid container direction="column">
            <Grid item>
                <Header />
            </Grid>
            <Grid item container>
                <Grid item xs={false} sm={2}/>
                <Grid item xs={12} sm={8}>
                    <Grid container  spacing={4} className={classes.MainContainer}>
                        {searchParams.results.length ? renderCards() : <p>Shieeet</p>}
                    </Grid>
                </Grid>
                <Grid item xs={false} sm={2}/>
            </Grid>


            <HistorySlider/>
        </Grid>
    )
};

export default MainContent;