import { useState, useEffect } from "react";
import axios from "axios";

const useFetch = (endpoint) => {
  const [data, setData] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);
  const axios = require("axios");

  const options = {
    // 59:05
    method: "GET",
    url: `https://jsearch.p.rapidapi.com/${endpoint}`,
    headers: {
      "X-RapidAPI-Key": "b0d07c0dbamshce78857e726a42bp1091aajsn584bfe1ee4c1",
      "X-RapidAPI-Host": "jsearch.p.rapidapi.com",
    },
    params: {
      query: "Python developer in Texas, USA",
      page: "1",
      num_pages: "1",
    },
  };
};
