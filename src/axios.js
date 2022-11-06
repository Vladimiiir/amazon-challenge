import axios from "axios";

const instance = axios.create({
  baseURL: "https://us-central1-challenge-5ae4e.cloudfunctions.net/api", // The API (cloud function) URL
});

export default instance;

// http://127.0.0.1:5001/challenge-5ae4e/us-central1/api
