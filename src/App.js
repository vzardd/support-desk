import Home from "./landing-page/ui/Home";
import { Route, BrowserRouter as Router , Routes} from "react-router-dom";
import FormPage from "./form-page/ui/FormPage";
function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="/login" element={<FormPage/>}/>
      </Routes>
    </Router>
  );
}

export default App;
