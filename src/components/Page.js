import React, {useEffect, useState} from "react";

import {useParams} from "react-router-dom";
import axios from "axios";

const Page = () => {
    let { title } = useParams();
    const [page, setPage] = useState({});

    useEffect( () => {
        const endpoint = `https://en.wikipedia.org/w/rest.php/v1/page/${title}/bare`;
        axios.get(endpoint)
            .then((res, err) => {
                const data = res.data;
                setPage(data);
                console.log(data)
            })
    },[title])
    return <div>
        <iframe
            title={`${page.title}`}
            width="100%"
            height="100%"
            src={page.html_url}>
        </iframe>
    </div>
}

export default Page;