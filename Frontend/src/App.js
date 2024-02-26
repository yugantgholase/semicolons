import logo from "./logo.svg";
import "./App.css";
import { Login } from "./Components/Login";
import { Upload } from "./Components/Upload";
import { Navbar } from "./Components/Navbar";
import { Routes, Route } from "react-router-dom";
import { Staging } from "./Components/Staging";
import {Mapping} from "./Components/Mapping";
import { Loading} from "./Components/Loading"

function App() {
  return (
    <div className="App ">
      <Navbar />
      <Routes>
        <Route exact path="/" element={<Login/>}></Route>
        <Route exact path="/login" element={<Login />}></Route>
        <Route exact path="/upload" element={<Upload />}></Route>
        <Route exact path="/upload/staging" element={<Staging />}></Route>
        <Route
          exact
          path="/upload/staging/mapping"
          element={<Mapping />}
        ></Route>
        <Route exact path="/loading" element={<Loading/>}></Route>
      </Routes>
    </div>
  );
}

export default App;
