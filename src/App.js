import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

import "./App.css";
import Atta from "./components/Atta.jsx";
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
              <Atta />
            </Route>
            <Route exact path="/Rice">
              <Rice />
            </Route>
          </Switch>
        </div>
      </Router>
    </>
  );
}

export default App;
