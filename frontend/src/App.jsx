import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

// Main layout
import Layout from "./components/Layout";

// Pages with layout
import Home from "./pages/Home";
import Resources from "./pages/Resources";
import Fitness from "./pages/Fitness";
import Support from "./pages/Support";
import Profile from "./pages/Profile";
import Contact from "./pages/Contact";
import ExerciseDetailPage from "./components/fitness/ExerciseDetailPage";

// Pages without layout
import Signup from "./pages/Signup";
import Login from "./pages/Login";
import Success from "./pages/Success";

function App() {
  return (
    <Router>
      <div className="flex flex-col min-h-screen font-primary overflow-x-hidden">
        <Routes>
          {/* Auth-related routes (outside layout) */}
          <Route path="/signup" element={<Signup />} />
          <Route path="/login" element={<Login />} />
          <Route path="/success" element={<Success />} />

          {/* Main app routes (inside layout) */}
          <Route element={<Layout />}>
            <Route index element={<Home />} />
            <Route path="/resources" element={<Resources />} />
            <Route path="/fitness" element={<Fitness />} />
            <Route path="/support" element={<Support />} />
            <Route path="/profile" element={<Profile />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/exercises/:exerciseId" element={<ExerciseDetailPage />} />
          </Route>
        </Routes>
      </div>
    </Router>
  );
}

export default App;