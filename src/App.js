import "./App.css";
import { Navbar } from "./components/Navbar";
import { Home } from "./components/Home";
import { TotalCases } from "./components/TotalCases";
import { BookAVaccine } from "./components/BookAVaccine";
import { Admin } from "./components/Admin";
import { Signup } from "./components/Signup";
import { Searchbypin } from "./components/Searchbypin";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

function App() {
  return (
    <>
{/* temporary */}

<Searchbypin />




      {/* <Router>
        <Navbar />
        <Switch>
          <Route exact path="/">
            <Home />
          </Route>
          <Route exact path="/totalcases">
            <TotalCases />
          </Route>
          <Route exact path="/bookavaccine">
            <BookAVaccine />
          </Route>
          <Route exact path="/admin">
            <Admin />
          </Route>
          <Route exact path="/signup">
            <Signup />
          </Route>
        </Switch>
      </Router> */}
    </>
  );
}

export default App;
