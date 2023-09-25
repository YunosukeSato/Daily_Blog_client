import axios from "axios";

axios.defaults.baseURL = "https://daily-blog-server.onrender.com";

axios.defaults.withCredentials = true;

export default axios;
