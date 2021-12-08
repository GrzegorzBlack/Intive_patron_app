import axios from "axios";

export const handleSearch = (searchText, language )=> {
    const endpoint = `https://${language}.wikipedia.org/w/rest.php/v1/search/page`;
    // const config = {
    //     params: {
    //         q: searchText,
    //         limit: 20
    //     }
    // }
    // axios.get(endpoint, config)
    //     .then((res, err) => {
    //         const data = res.data;
    //         setSearch(data.pages);
    //         console.log(data)
    //     })
    //
    //
    // setName(name.push(searchText));  // Tu chyba coś nie halo jest ???



    // window.localStorage.setItem('searchHistory', JSON.stringify(name));
}

