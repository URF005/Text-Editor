import "./App.css";
import Navbar from "./components/Navbar";
import TextForm from "./components/TextForm";
import Alert from "./components/Alert";
import About from "./components/About";
import React, { useState } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
function App() {
  const [msg, setmsg] = useState("Welcome To URF text convertor");
  const [mystyle, setmystyle] = useState({
    backgroundColor: "white",
    color: "black",
  });
  const mymsg = (n) => {
    setmsg(n);
    setTimeout(() => {
      setmsg("Welcome To URF text convertor");
    }, 3000);
  };

  const togglemode = () => {
    if (mystyle.color === "black") {
      setmystyle({
        backgroundColor: "black",
        color: "white",
      });
      mymsg("Dark mode Enabled");
    } else {
      setmystyle({
        backgroundColor: "white",
        color: "black",
      });
      mymsg("Light mode enabled");
    }
  };

  return (
    <>
     
      <BrowserRouter>
      <Navbar title="Text Convertor" />
        <Routes>
          <Route
            exact path="/"
            element={
              <div className="cont" style={mystyle}>
                {/* Props Applied */}

                <div className="container mt-5 p-4  ">
                  <Alert alert={msg} />
                  <h2 className="p-4">Enter the text area to analyze</h2>
                  <TextForm mymsg={mymsg} />
                </div>
                <div className="con d-flex justify-content-center">
                  <button
                    type="button"
                    className="btn btn-primary "
                    onClick={togglemode}
                  >
                    Enable or Disable Dark mode
                  </button>
                </div>
              </div>
            }
          ></Route>
          <Route
            exact path="/About"
            element={
              <div className="myclass">
                <h4>Our Heroes</h4>
                <About />
              </div>
            }
          >
            {" "}
          </Route>
        </Routes>
      </BrowserRouter>
    </>
  );
}
export default App;
