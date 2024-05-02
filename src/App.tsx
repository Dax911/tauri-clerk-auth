// App.tsx
import React from "react";
import {
  SignInButton,
  SignedIn,
  SignedOut,
  UserButton,
} from "@clerk/clerk-react";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Link,
  Navigate,
} from "react-router-dom";
import Home from "./components/Home";
import Dashboard from "./components/Dashboard";
import Settings from "./components/Settings";
import { useUser } from "@clerk/clerk-react";

const App: React.FC = () => {
  const { isSignedIn } = useUser();

  return (
    <Router>
      <div>
        <nav>
          <ul>
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/dashboard">Dashboard</Link>
            </li>
            <li>
              <Link to="/settings">Settings</Link>
            </li>
          </ul>
        </nav>
        <SignedOut>
          <SignInButton mode="modal" />
        </SignedOut>
        <SignedIn>
          <UserButton afterSignOutUrl="/" />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route
              path="/dashboard"
              element={isSignedIn ? <Dashboard /> : <Navigate to="/" />}
            />
            <Route
              path="/settings"
              element={isSignedIn ? <Settings /> : <Navigate to="/" />}
            />
          </Routes>
        </SignedIn>
      </div>
    </Router>
  );
};

export default App;
