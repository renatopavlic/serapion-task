import axios from "axios";

const apiurl = "http://www.omdbapi.com/?i=tt3896198&apikey=1247a431";

export default  {
  search: (s, callback)=>{
    axios(apiurl + "&s=" + s).then(({ data }) => {
      let results = data.Search;
      console.log("this are results: ", results)
      callback(results);
      //return results
    });
  }
}