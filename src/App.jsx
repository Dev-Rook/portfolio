import Styles from "./App.module.css";
import { BrowserRouter, Router, Route, Routes } from "react-router-dom";

// import Sidebar from "./Components/_Sidebar/Sidebar";
import Nav from "./Components/_Nav/Nav";
import Landing from "./Views/Landing/Landing";

function App() {
  return (
    <div className={Styles.App}>
      <BrowserRouter>
        <Nav />

        
        <Routes>
          <Route path="/" element={<Landing />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
