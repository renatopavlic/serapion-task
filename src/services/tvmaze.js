import axios from "axios";

const apiurl = "http://api.tvmaze.com/search/shows";

export default  {
  search: (s, callback)=>{
    axios(apiurl + "?q=" + s).then(({data}) => {
      console.log("this is tvmaze data: ", data)
    
      let results = data;
      console.log("this are tvmaze results: ", results)
      callback(results); 
      //return results
    });
  }
}