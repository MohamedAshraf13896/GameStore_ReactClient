import axios from "axios";

let BaseUrl = "http://localhost:4151";

let get = (num) => axios.get(`${BaseUrl}/api/Products`);

let getByID = (productid) => axios.get(`${BaseUrl}/api/Products/${productid}`);

let Delete = (productid) =>
  axios.delete(`${BaseUrl}/api/Products/${productid}`);

let Post = (product) => axios.post(`${BaseUrl}/api/Products`, product);
let Put = (productid, product) =>
  axios.put(`${BaseUrl}/api/Products/${productid}`, product);

export let ProductApi = {
  get,
  getByID,
  Delete,
  Post,
  Put,
};
