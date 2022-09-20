import Styles from "./App.module.css";

// import Sidebar from "./Components/_Sidebar/Sidebar";
import Nav from "./Components/_Nav/Nav";
import Landing from "./Views/Landing/Landing";

function App() {
  return (
    <div className={Styles.App}>
      <Nav />
      <Landing />
    </div>
  );
}

export default App;
