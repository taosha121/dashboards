import './App.css';
import DashboardHeader from './components/DashboardHeader';
import DashboardContent from './components/DashboardContent';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";

function App() {
  return (
    


<Router>
  <div>
    {/* <nav>
      <ul>
        <li>
          <Link to="/dashboard1">Dashboard1</Link>
        </li>
        <li>
          <Link to="/dashboard2">Dashboard2</Link>
        </li>
      </ul>
    </nav> */}

    <Switch>
      <Route path="/dashboard1">
        <div className="App">
          <DashboardHeader title="项目集成管理智慧运营中心" />
          <DashboardContent />
        </div>
      </Route>
      <Route path="/dashboard2">
        <h1>22222222222222222222222222222222222222222</h1>
      </Route>
    </Switch>
  </div>
  </Router>
  );
}

export default App;
