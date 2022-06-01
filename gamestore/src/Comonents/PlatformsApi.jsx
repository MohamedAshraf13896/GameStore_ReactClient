import axios from "axios";

let BaseUrl = "http://localhost:4151";

let get = (num) => axios.get(`${BaseUrl}/api/Platform`);

let getByID = (PlatformID) =>
  axios.get(`${BaseUrl}/api/Platform/${PlatformID}`);

let Delete = (PlatformID) =>
  axios.delete(`${BaseUrl}/api/Platform/${PlatformID}`);

let Post = (Platform) => axios.post(`${BaseUrl}/api/Platform`, Platform);

export let PlatformsApi = {
  get,
  getByID,
  Delete,
  Post,
};
