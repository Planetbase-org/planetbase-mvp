import { Route, Router, Routes } from "react-router-dom";
import Home from "./pages/Home";

function App() {

  return (
    <>
      <Router>
        <Routes>
          <Route path="/" element={<Home />}></Route>
        </Routes>
      </Router>
      <h1>Planet Base</h1>
    </>
  )
}

export default App
