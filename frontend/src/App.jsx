import "./App.css";
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from "./pages/Home";
import Resources from "./pages/Resources";
import Fitness from "./pages/Fitness";
import Support from "./pages/Support";
import Profile from "./pages/Profile";
import Layout from "./components/Layout";
import ExerciseDetailPage from "./components/fitness/ExerciseDetailPage";
import Contact from "./pages/Contact";
import Signup from "./pages/Signup";
import Login from "./pages/Login";

function App() {
  return (
    <Router>
      <div className="flex flex-col min-h-screen font-primary overflow-x-hidden">
        <Routes>
          <Route element={<Layout />}>
            <Route index element={<Home />} />
            <Route path="/resources" element={<Resources />} />
            <Route path="/fitness" element={<Fitness />} />
            <Route path="/support" element={<Support />} />
            <Route path="/profile" element={<Profile />} />
            <Route path="/exercises/:exerciseId" element={<ExerciseDetailPage />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/signup" element={<Signup />} />
            <Route path="/login" element={<Login />} />
          </Route>
        </Routes>
      </div>
    </Router>
  );
}

export default App;