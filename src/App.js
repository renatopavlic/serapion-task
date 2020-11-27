import React, { useState, useEffect} from "react";

import imdbService from "./services/imdb";
import tmdbService from "./services/tmdb";
import omdbService from "./services/omdb";
import tvmazeService from "./services/tvmaze";
import './index.css';
import Search from "./components/Search/Search";
import Results from "./components/Results/Results";
import db from "./firebase";
import MyResults from "./components/MyResults/MyResults";
import firebase from "firebase";

function App() {

  const [state, setState] = useState({
    s: "",
    query: "",
    results: [],
    selected: {}
  });

  const [myDatabaseData, setMyDatabaseData] = useState([]);

  useEffect(() => {

    db.collection("movies").onSnapshot(snapshot => {
      setMyDatabaseData(snapshot.docs.map(doc => ({
        id: doc.id,
         title: doc.data().title,
          imageUrl: doc.data().imageUrl,
        source: doc.data().source})))

        console.log("this is firebase data: ", myDatabaseData)
    })
  }, []);

  const mainSearch = (e)=> {
    if (e.key === "Enter") {
      if(state.s.length === 0) {
        alert("Nothing to search for!");
        window.location.reload();
      }
      const local = giveMeLocal(state.s);
      console.log(local);
      if(local.length==0){
        console.log("no local, search 3rd party sources");
        imdbService.search(state.s, (results)=>{
          setState({...state, results}); 
        });
      } else {
        setState({...state, results: local}); 
      }
    }
  }

  const search = (e) => {
    if (e.key === "Enter") {
      console.log("this is state: ",state);
      imdbService.search(state.s, (results)=>{
        setState({...state, results}); 
      });
    }
  }

  const searchTmdb = (e) => {
    if (e.key === "Enter") {
      console.log("this is tmdb state: ",state);
      tmdbService.search(state.query).then(results=>{
        setState({...state, results});
      })
    }
  }

  const searchOmdb = (e) => {
    if (e.key === "Enter") {
      console.log("this is OMDB state: ",state);
      omdbService.search(state.s, (results)=>{
        setState({...state, results});
      });
    }
  }

  const searchTvmaze = (e) => {
    if (e.key === "Enter") {
      console.log("this is Tv Maze state: ",state);
      tvmazeService.search(state.s, (results)=>{
        setState({...state, results});
      });
    }
  }

  const searchFirebase = (e) => {
    if(e.key === "Enter") {
      setState({...state, results: myDatabaseData.map(movie=>{
        if(movie.title.toLowerCase().indexOf(state.s)!=-1){
          return movie;
        } else return false;
      }).filter(movie=>{return movie})});
      /*db.collection("movies").where("title", "==", "batman").get().then(snapshot => console.log("this is firebase snapshot: ", snapshot.docs))*/
    }
  }

  const giveMeLocal = (searchStr) => {
    return myDatabaseData.map(movie=>{
      if(movie.title.toLowerCase().indexOf(searchStr)!=-1){
        return movie;
      } else return false;
    }).filter(movie=>{return movie});
  }

 


  const handleInput = (e) => {
    let s = e.target.value;              

    setState({...state, s: s})
  };

  const handleInputForTmdb = e => {
    setState({...state, query: e.target.value});
  }

  const handleInputForOmdb = e => {
    setState({...state, s: e.target.value});
  }

  const handleInputForTvmaze = e => {
    setState({...state, s: e.target.value})
  }

  const handleFirebase = e => {
    setState({...state, s: e.target.value});
  }
  console.log("firebase search input: ", state.s)


  return (
    <div className="app">
      <header>
        <a href="/" className="header__link">
        <img 
        src="https://www.serapion.net/dist/images/serapion-logo-large.png"
        alt="serapion-logo"
        />
        </a>
      </header>
      <main>
        {/* Search */}
        <Search handleInput={handleInput} search={mainSearch}/>
      {/*  <Search handleInput={handleInput} search={search}/>
        <Search handleInput={handleInputForTmdb} search={searchTmdb}/>
        <Search handleInput={handleInputForOmdb} search={searchOmdb}/>
        <Search handleInput={handleInputForTvmaze} search={searchTvmaze}/>
        <Search handleInput={handleFirebase} search={searchFirebase} /> */}
        {/* Results */ }
        <Results results={state.results} />
      {/*   {myDatabaseData.map(movie =>
        (
          <MyResults title={movie.title} imageUrl={movie.imageUrl} />
        ))} */ }

      </main>
    </div>
  );
}

export default App;
