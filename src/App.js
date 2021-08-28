import Navi from "./layouts/NaviLayout/Navi";
import Dashboard from "./layouts/DashboardLayout/Dashboard";
function App() {
  return (
    /*
      <div id="preloader-active">
        <div class="preloader d-flex align-items-center justify-content-center">
          <div class="preloader-inner position-relative">
            <div class="preloader-circle"></div>
            <div class="preloader-img pere-text">
              HRMS
            </div>
          </div>
        </div>
      </div>*/
    <div className="App">
      <header>
        <Navi />
      </header>
      <Dashboard />
    </div>
  );
}

export default App;
