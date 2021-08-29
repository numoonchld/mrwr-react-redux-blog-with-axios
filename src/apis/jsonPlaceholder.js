import axios from "axios";

const apiConfig = {
  baseURL: "https://jsonplaceholder.typicode.com"
};

export default axios.create(apiConfig);
