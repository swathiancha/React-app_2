import React from "react";
import Navbar from "./Navbar";
import "./App.css";
import { BrowserRouter,Routes,Route } from "react-router-dom";
import Home from "./Home";
import Editorial from "./Editorial";
import Submit from "./Submit";
import Published from "./Published";
import Author from "./Author";
// import Bounce from "./react-animations"
// import styled,{keyFrames} from "./styled-components"
// import YouTube from "react-youtube"
// import Dashboard from "./Dashboard";
// import Aboutpage from "./Aboutpage";


const App = () => {
// const bounce =styled.div `animotion:2s ${keyFrames`${bounce}`}infinite`;
  // const [youtubeID]=useState('watch?v=mndCnbW6fws')
  return (
    <div>
      <h2>welcome React Application</h2>
      <div >
        {/* <Bounce><h1>welcome to india</h1></Bounce> */}
      <img className="img" src="https://www.ijvsar.com/img/Logo.png" alt="not loading" height={"40px"} />
      <BrowserRouter  >
        <Navbar />  
        <Routes>
          <Route path="/" element={<Home/>} ></Route>
          <Route path="/Editorial" element={<Editorial/>}></Route> 
          <Route path="/submit" element={<Submit />}></Route>
          <Route path="/published" element={<Published />}></Route>
          <Route path="/Author" element={<Author />}></Route>
        </Routes>
      </BrowserRouter>
      </div>

      </div>
  );
  
};

export default App;


