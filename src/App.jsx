import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import {Home, Product,Solution, Login, SignUp, Support} from "./pages/index";
// import Product from "./pages/product";
// import Solution from "./pages/solution";

function App() {
  return (
    <>
      <Router>
        <Routes>
          <Route exact path="/" element={<Home />}></Route>
          <Route exact path="/login" element={<Login />}></Route>
          <Route exact path="/signup" element={<SignUp />}></Route>
          <Route exact path="/products" element={<Product />}></Route>
          <Route exact path="/solutions" element={<Solution />}></Route>
          <Route exact path="/support" element={<Support />}></Route>
        </Routes>
      </Router>
    </>
  );
}

export default App;
