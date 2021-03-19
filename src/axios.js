import axios from "axios";

const instance = axios.create({
  baseURL: "http://jsonplaceholder.typicode.com",
});

instance.defaults.headers.common["Authorization"] = "AUTH-TOKEN FROM INSTANCE";

// instance.interceptors.request...

export default instance;

// This file overrides the settings of axios defined in index.js file if it is exported in any component
