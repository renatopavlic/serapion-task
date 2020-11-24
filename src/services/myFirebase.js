import axios from "axios";
import db from "../firebase";

const apiurl = "http://www.omdbapi.com/?i=tt3896198&apikey=1247a431";

export default  {
  search: (s, callback)=>{
    db.ref("movies")
    .orderByChild("title")
    .equalTo(s)
    .on('value', function (snapshot) {
        if (snapshot.val() === null) {
            alert('Data is not present');
        }else{
            console.log('Data is present');
            var key = snapshot.key;
            var childData = snapshot.val();
            //Your Code goes Here
        }
    });
      callback(results);
      //return results
  }