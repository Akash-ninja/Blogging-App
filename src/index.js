import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import registerServiceWorker from "./registerServiceWorker";
import axios from "axios";

axios.defaults.baseURL = "http://jsonplaceholder.typicode.com";
axios.defaults.headers.common["Authorization"] = "AUTH-TOKEN";
axios.defaults.headers.post["Content-Type"] = "application/json";

axios.interceptors.request.use(
  (request) => {
    console.log(request);
    // Edit request config
    return request;
  },
  (error) => {
    // Only executes when Internet connection is not there
    console.log(error);
    Promise.reject(error);
  }
);

axios.interceptors.response.use(
  (response) => {
    console.log(response);
    // Edit response config
    return response;
  },
  (error) => {
    // Only executes when Internet connection is not there
    console.log(error);
    Promise.reject(error);
  }
);

ReactDOM.render(<App />, document.getElementById("root"));
registerServiceWorker();
