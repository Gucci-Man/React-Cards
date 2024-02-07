import React, { useState } from "react";
import axios from "axios";
import {v1 as uuid} from "uuid";

// Takes in a URL, should return an array with two elements
// First element is an array of data obtained from previous AJAX requests
// Second element is a function that will add a new object of data to the array
const useAxios = (url) => {
    let fullUrl = null;
    const [response, setResponse] = useState([]);
    const addObj = async (obj) => {
        // if obj is string, then create full url for pokemon
        if (typeof(obj) === 'string') {       
            fullUrl = url + obj
        // else just use base url for cards  
        } else {
            fullUrl = url;
        }
        const res = await axios.get(fullUrl);
        
        setResponse(response => [...response, { ...res.data, id: uuid() }]);
    };
    return [response, addObj]
}

export default useAxios;
