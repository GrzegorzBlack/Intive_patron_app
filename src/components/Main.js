import React, {useState, useEffect} from "react";
import {Grid} from "@material-ui/core";
import {makeStyles} from '@material-ui/styles';
import ArticleCard from './Card'
import axios from "axios";
import Header from "./Header";
import HistorySlider from "./HistorySlider";
import { useText } from "../contexts/TextProvider";





const useStyles = makeStyles({
    MainContainer: {
        paddingTop: "20px",
        paddingLeft: "50px",
        paddingRight: "50px"
    },
});

const MainContent = () => {
    const classes = useStyles();
    const [search, setSearch] = useState([]);
    const [language, setLanguage] = useState("en");


    const [name, setName] = useState(() => {
        const saved = localStorage.getItem("searchHistory");
        const initialValue = JSON.parse(saved);
        return initialValue || [];
    });

    const dispatchNewText = useText().dispatch;




    // useEffect( () => {
    //     const dataFromStorage = window.localStorage.getItem('searchHistory');
    //     setName(JSON.parse(dataFromStorage))
    // },[name])

    const handleSearch = searchText => {
        const payload = searchText;
        dispatchNewText({ type: "NEW_SEARCH_TEXT", payload });

        const endpoint = `https://${language}.wikipedia.org/w/rest.php/v1/search/page`;
        const config = {
            params: {
                q: searchText,
                limit: 20
            }
        }
        axios.get(endpoint, config)
            .then((res, err) => {
                const data = res.data;
                setSearch(data.pages);
                console.log(data)
                })


        setName(name.push(searchText));  // Tu chyba coś nie halo jest ???



        window.localStorage.setItem('searchHistory', JSON.stringify(name));
    }

    const handleLanguage = () => {
        (language === 'en') ? setLanguage('pl') : setLanguage('en');
    }



    const renderCards = () => {
        return search.map(page => {
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
                <Header  setLanguageFunc ={handleLanguage}/>
            </Grid>
            <Grid item container>
                <Grid item xs={false} sm={2}/>
                <Grid item xs={12} sm={8}>
                    <Grid container  spacing={4} className={classes.MainContainer}>
                        {search.length ? renderCards() : <p>Shieeet</p>}
                    </Grid>
                </Grid>
                <Grid item xs={false} sm={2}/>
            </Grid>


            <HistorySlider/>
        </Grid>
    )
};

export default MainContent;