import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

import "./App.css";
import About from "./components/About";
import Atta from "./components/Atta.jsx";
import Footer from "./components/Footer";
import Home from "./components/Home";
import Navbar from "./components/Navbar";
import Rice from "./components/Rice.jsx";
function App() {
  return (
    <>
      <Router>
        <Navbar />
        <div>
          <Switch>
            <Route exact path="/">
              <Home />
            </Route>

            <Route exact path="/Atta">
              <Atta />
            </Route>
            <Route exact path="/Rice">
              <Rice />
            </Route>
            <Route exact path="/About">
              <About />
            </Route>
          </Switch>
        </div>
        <Footer />
      </Router>
    </>
  );
}

export default App;
