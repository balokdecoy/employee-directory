import axios from "axios";
const BASEURL = "https://randomuser.me/api/?results=100&nat=US";

export default {
  getEmployee: function() {
    return axios.get(BASEURL)
  }
};