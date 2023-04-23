import React from "react";
import { Route, Routes } from "react-router-dom";
import Feedback from "../Feedback/Feedback";
import News from "../News/News";


function Main() {
  return (
    <>
    
      <Routes>
        <Route path="/feedback" element={<Feedback />}></Route>
        <Route path="/news" element={<News />}></Route>
      </Routes>
    </>
  );    
}

export default Main;
