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
      <div className="flex flex-col h-screen justify-between">
        <nav className="bg-gray-800 text-white p-4">
          <ul className="flex justify-around space-x-4">
            <li>
              <Link to="/" className="hover:text-blue-500">
                Home
              </Link>
            </li>
            <li>
              <Link to="/dashboard" className="hover:text-blue-500">
                Dashboard
              </Link>
            </li>
            <li>
              <Link to="/settings" className="hover:text-blue-500">
                Settings
              </Link>
            </li>
          </ul>
        </nav>
        <div className="flex flex-col justify-center items-center min-h-[50vh]">
          <SignedOut>
            <SignInButton mode="modal" />
          </SignedOut>
          <SignedIn>
            <UserButton afterSignOutUrl="/" />
          </SignedIn>
        </div>
        <SignedIn>
          <div className="p-4">
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
          </div>
        </SignedIn>
      </div>
    </Router>
  );
};

export default App;
