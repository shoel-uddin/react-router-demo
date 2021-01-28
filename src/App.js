import About from "./components/About";
import Home from "./components/Home";
import Stuff from "./components/Stuff";

import {
  BrowserRouter as Router,
  Link,
  Switch,
  Route
} from 'react-router-dom'

function App() {
  return (
    <Router> 
      <div className="App">

        <header>
          <Link to= "/">Home</Link>
          <br/>
          <Link to="/stuff">Stuff</Link>
          <br/>
          <Link to="/about">About</Link>
        </header>

        <Switch>

          <Route path="/" exact>
            <Home />
          </Route>
          <Route path="/stuff">
            <Stuff />
          </Route>
          <Route path="/about">
            <About />
          </Route>
          

        </Switch>
        
      </div>
    </Router>
    
  );
}

export default App;
