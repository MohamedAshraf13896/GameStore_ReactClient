import axios from "axios";

let BaseUrl = "http://localhost:4151";

let get = (num) => axios.get(`${BaseUrl}/api/Cateogory`);

let getByID = (catid) => axios.get(`${BaseUrl}/api/Cateogory/${catid}`);

let Delete = (catid) => axios.delete(`${BaseUrl}/api/Cateogory/${catid}`);

let Post = (Cateogory) => axios.post(`${BaseUrl}/api/Cateogory`, Cateogory);

export let CategoriesApi = {
  get,
  getByID,
  Delete,
  Post,
};
