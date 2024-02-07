import React, { useState } from "react";
import axios from "axios";
import {v1 as uuid} from "uuid";

// Takes in a URL, should return an array with two elements
// First element is an array of data obtained from previous AJAX requests
// Second element is a function that will add a new object of data to the array
const useAxios = (url) => {
    const [response, setResponse] = useState([]);
    const addObj = async () => {
        const res = await axios.get(url);
        setResponse(response => [...response, { ...res.data, id: uuid() }]);
    };
    return [response, addObj]
}

export default useAxios;
