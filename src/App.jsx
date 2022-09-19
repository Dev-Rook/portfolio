import Styles from "./App.module.css";

// import Sidebar from "./Components/_Sidebar/Sidebar";
import Nav from "./Components/_Nav/Nav";

function App() {
  return (
    <div className={Styles.App}>
      <Nav />
    </div>
  );
}

export default App;
