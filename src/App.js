import "./App.css";
import NavigationBar from "./Components/NavigationBar";
import Books from "./Components/Books/index";
import Employees from "./Components/Employees/index";
import { BrowserRouter, Routes, Route } from "react-router-dom";

const App = () => {
  return (
    <div>
      <BrowserRouter>
        <NavigationBar />

        <Routes>
          <Route path="/books" element={<Books />}></Route>
          <Route path="/employees" element={<Employees />}></Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
};
export default App;
