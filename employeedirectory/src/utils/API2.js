import axios from "axios";


export default {
  search: function(url) {
      console.log(url)
    return axios.get(url);
  }
};
