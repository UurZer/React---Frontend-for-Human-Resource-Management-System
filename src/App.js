import './App.css';
import 'semantic-ui-css/semantic.min.css';
import 'bootstrap';
import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap/dist/js/bootstrap.js';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';
import { Container } from "semantic-ui-react";

import Navi  from "./layouts/NaviLayout/Navi";
import Dashboard  from "./layouts/DashboardLayout/Dashboard";
function App() {
  return (
    <div className="App">
      <Navi/>
       <Dashboard/> 
    </div>
  );
}

export default App;
