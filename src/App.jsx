import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { ToastContainer } from "react-toastify";
import {
  Home,
  Product,
  Solution,
  Login,
  SignUp,
  Support,
  EventProfile,
  EditEvent,
  Sponsor,
  SponsorPage,
  SponsorBid,
  SponsoredEvent,
  Payment,
  Resources,
  Company,
} from "./pages/index";
import SuccessPage from "./pages/sponsor/sponsor-bid/SuccessPage";
import ReactGA from "react-ga";

function App() {
  const TRACKING_ID = "G-YNHY0F62PQ";
  ReactGA.initialize(TRACKING_ID);
  return (
    <>
      <Router>
        <Routes>
          <Route exact path="/" element={<Home />} />
          <Route exact path="/login" element={<Login />} />
          <Route exact path="/signup" element={<SignUp />} />
          <Route exact path="/organizer" element={<EventProfile />} />
          <Route exact path="/create-event" element={<EditEvent />} />
          <Route exact path="/sponsor" element={<Sponsor />} />
          <Route exact path="/sponsor-page" element={<SponsorPage />} />
          <Route exact path="/sponsored-events" element={<SponsoredEvent />} />
          <Route exact path="/sponsor-bid" element={<SponsorBid />} />
          <Route exact path="/solutions" element={<Solution />} />
          <Route exact path="/support" element={<Support />} />
          <Route exact path="/payment" element={<Payment />} />
          <Route exact path="/products" element={<Product />} />
          <Route exact path="/resources" element={<Resources />} />
          <Route exact path="/company" element={<Company />} />
          <Route exact path="/success" element={<SuccessPage />} />
        </Routes>
      </Router>
      <ToastContainer />
    </>
  );
}

export default App;
