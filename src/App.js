import Home from "./landing-page/ui/Home";
import { Route, BrowserRouter as Router , Routes} from "react-router-dom";
import FormPage from "./form-page/ui/FormPage";
import Dashboard from "./dashboard/ui/Dashboard";
function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="/login" element={<FormPage type="login"/>}/>
        <Route path="/request-feature" element={<FormPage type="request-feature"/>}/>
        <Route path="/raise-ticket" element={<FormPage type="raise-ticket"/>}/>
        <Route path="/dashboard" element={<Dashboard/>}/>
      </Routes>
    </Router>
  );
}

export default App;
