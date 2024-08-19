import { useEffect } from "react";
import {
  BrowserRouter as Router,
  Route,
  Routes,
  useLocation,
} from "react-router-dom";
import Error from "./pages/Error";
import Landing from "./pages/Landing";
import Project from "./pages/Project";
import { ThemeProvider } from "./contexts/ContextProvider";

// This component will be used to track page views
function GoogleAnalyticsTracker() {
  const location = useLocation();

  useEffect(() => {
    window.gtag("config", "G-V7ELZ933M3", {
      page_path: location.pathname,
    });
  }, [location]);

  return null; // This component doesn't render anything
}

export default function App() {
  return (
    <ThemeProvider>
      <Router basename={process.env.PUBLIC_URL}>
        {/* Add the GoogleAnalyticsTracker component inside the Router */}
        <GoogleAnalyticsTracker />
        <Routes>
          <Route path="/" element={<Landing />} />
          <Route path="/project/:id" element={<Project />} />
          <Route path="/*" element={<Error />} />
        </Routes>
      </Router>
    </ThemeProvider>
  );
}
