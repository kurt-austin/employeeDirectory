import axios from "axios";


export default {
  search: function(BASEURL) {
    return axios.get(BASEURL);
  }
};
