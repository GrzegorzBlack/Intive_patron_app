import axios from "axios";

const searchPagesAPI = (searchText, limit, language, handleSearchResults) => {
  const endpoint = `https://${language}.wikipedia.org/w/rest.php/v1/search/page`;
  const config = {
    params: {
      q: searchText,
      limit: limit
    }
  }

  console.log(config)
  axios.get(endpoint, config)
    .then((res, err) => {
      const data = res.data;
      handleSearchResults(data.pages);
    })
}

export default searchPagesAPI;