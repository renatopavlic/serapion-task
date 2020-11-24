import axios from "axios";

const apiurl = "https://api.themoviedb.org/3/search/movie?api_key=ebad3d522f6445294bd642034f19c458";

export default  {
  search: (query)=>{
    return new Promise((resolve, reject)=>{
      axios(apiurl + "&query=" + query).then(( response ) => { // ako neces stavit {data} onda koristi response
        //let results = data.Search;
        console.log("this are results for tmdb: ", response)
  
        //return response.data.results;
        resolve(response.data.results)
      });
    })
  }
}