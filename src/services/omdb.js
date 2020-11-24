import axios from "axios";

const apiurl = "http://www.omdbapi.com/?i=tt3896198&apikey=1272015a";

export default  {
  search: (s, callback)=>{
    axios(apiurl + "&s=" + s).then(({data}) => {
      console.log("this is omdb data: ", data)
    
      let results = data.Search;
      console.log("this are OMDB results: ", results)
      callback(results); 
      //return results
    });
  }
}