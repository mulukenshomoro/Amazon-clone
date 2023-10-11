import axios from "axios";

const instance = axios.create({
  // THE API (cloud function) URL
  baseURL: 'https://us-central1-class-project-8759d.cloudfunctions.net/api'
   
});

export default instance;


//Hosting URL: https://class-project-8759d.web.app
//https://class-project-8759d.web.app