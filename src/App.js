import "./App.css";
import Alert from "./components/alert";
import Navebar from "./components/Navebar";
import TextForm from "./components/TextForm";
// import About from "./components/About";
import React, { useState } from "react";
// import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

function App() {
  const [mode, setMode] = useState("light"); // Default is light mode
  const [alert, setAlert] = useState(null);

  const showAlert = (message, type) => {
    setAlert({
      msg: message,
      type: type,
    });
    setTimeout(() => {
      setAlert(null);
    }, 3000);
  };

  const toggleMode = () => {
    if (mode === "light") {
      setMode("dark");
      showAlert("Dark Mode is enabled", "success");
      document.body.style.backgroundColor = "#343a40"; // Dark background
      document.body.style.color = "white"; // Light text
      document.title = "TextUtil - Dark Mode";
    } else {
      setMode("light");
      showAlert("Light Mode is enabled", "success");
      document.body.style.backgroundColor = "white"; // Light background
      document.body.style.color = "black"; // Dark text
      document.title = "TextUtil - Light Mode";
    }
  };

  return (
    <>
      {/* <Router> */}
      <Navebar title="TEXTIFY" mode={mode} toggleMode={toggleMode} />
      <Alert alert={alert} />
      <div className="container">
        <TextForm showAlert={showAlert} heading="Enter your text to analyze" />
        {/* <Routes>
            <Route exact path="/about" element={<About />} />{" "}
            <Route
              exact
              path="/"
              element={
                <TextForm
                  showAlert={showAlert}
                  heading="Enter your text to analyze"
                />
              }
            />
          </Routes> */}
      </div>
      {/* </Router> */}
    </>
  );
}

export default App;
