import axios from "axios";

export default axios.create({
  baseURL: "https://api.chucknorris.io/",
  // headers: {
  //   Authorization: "Client-ID Os00eyrqwAFDTYYKpBYaex_wjVNwXlFehEFPzTPYfi4",
  // },
});
