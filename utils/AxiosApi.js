import axios from "axios";
import { baseURL } from "./Common";
import * as https from "https";
import * as http from "https";

const axiosApi = axios.create({
  baseURL: baseURL,
  headers: {
    "Access-Control-Allow-Origin": "*",
    "Access-Control-Allow-Methods": "DELETE, POST, GET, OPTIONS",
    "Access-Control-Allow-Headers":
      "Authorization,Content-Type, Accept, X-Requested-With, remember-me",
    "Content-Type": "application/json",
    "Access-Control-Allow-Credentials": "true",
    "Access-Control-Max-Age": "3600",
    "Accept-Language": "en-US"
  },
  httpsAgent: new https.Agent({ keepAlive: true, rejectUnauthorized: false }),
  httpAgent: new http.Agent({ keepAlive: true })
});

export default axiosApi;
