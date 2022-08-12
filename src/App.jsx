import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Product from "./pages/product";
import Solution from "./pages/solution";

function App() {
  return (
    <>
      <Router>
        <Routes>
          <Route exact path="/" element={<Home />}></Route>
          <Route exact path="/products" element={<Product />}></Route>
          <Route exact path="/solutions" element={<Solution />}></Route>
        </Routes>
      </Router>
    </>
  );
}

export default App;
