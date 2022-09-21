import React from "react";
import ReactGA from "react-ga";

const useAnalyticsEventTracker = (category = "Event category") => {
  const eventTracker = (action = "test action", label = "test label") => {
    ReactGA.event({ category, action, label });
  };
  return eventTracker;
};
export default useAnalyticsEventTracker;
