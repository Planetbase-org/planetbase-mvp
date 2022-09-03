import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { ToastContainer } from "react-toastify";
import {Home, Product,Solution, Login, SignUp, Support, EventProfile, EditEvent, Sponsor, SponsorPage, SponsorBid, SponsoredEvent, Payment, Resource, Company} from "./pages/index";

function App() {
  return (
    <>
      <Router>
        <Routes>
          <Route exact path="/" element={<Home />}></Route>
          <Route exact path="/login" element={<Login />}></Route>
          <Route exact path="/signup" element={<SignUp />}></Route>
          <Route exact path="/organizer" element={<EventProfile />}></Route>
          <Route exact path="/create-event" element={<EditEvent />}></Route>
          <Route exact path="/sponsor" element={<Sponsor />}></Route>
          <Route exact path="/sponsor-page" element={<SponsorPage />}></Route>
          <Route exact path="/sponsored-events" element={<SponsoredEvent />}></Route>
          <Route exact path="/sponsor-bid" element={<SponsorBid />}></Route>
          <Route exact path="/solutions" element={<Solution />}></Route>
          <Route exact path="/support" element={<Support />}></Route>
          <Route exact path="/payment" element={<Payment />}></Route>
          <Route exact path="/products" element={<Product />}></Route>
          <Route exact path="/resources" element={<Resource />}></Route>
          <Route exact path="/company" element={<Company />}></Route>
        </Routes>
      </Router>
      <ToastContainer/>
    </>
  );
}

export default App;
