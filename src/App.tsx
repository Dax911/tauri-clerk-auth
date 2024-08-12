import React, { useEffect } from "react";
import {
  SignInButton,
  SignedIn,
  SignedOut,
  UserButton,
  useClerk,
} from "@clerk/clerk-react";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import Home from "./components/Home";
import Dashboard from "./components/Dashboard";
import Settings from "./components/Settings";
import { onOpenUrl } from "@tauri-apps/plugin-deep-link";
import { invoke } from "@tauri-apps/api/core";

const openLink = async () => {
  await invoke("authenticate_user");
};

const App: React.FC = () => {
  const { setActive } = useClerk();
  const { session } = useClerk();

  useEffect(() => {
    const unlisten = onOpenUrl((urls) => {
      console.log("Deep link received:", urls);
      const url = new URL(urls[0]);
      const authContextString = url.searchParams.get("authcontext");
      if (authContextString) {
        const authContext = JSON.parse(decodeURIComponent(authContextString));
        console.log("Auth context:", authContext);

        // Set the session as active using the session ID
        if (authContext.sessionId) {
          try {
            console.log(`Setting session as active...${authContext.sessionId}`);
            setActive({ session: authContext.sessionId });
            console.log("Session set as active successfully");
            // Verify the session state
            console.log("Current session:", session);
          } catch (error) {
            console.error("Failed to set session as active", error);
          }
        }
      }
    });

    return () => {
      unlisten.then((fn) => fn());
    };
  }, [setActive]);

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
          <button onClick={openLink}>Open Link</button>
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
            <h1 className="text-2xl font-bold">Protected content</h1>
            <div className="text-center font-black text-3xl">
              YOU DID IT DUMBFUCK{" "}
            </div>

            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/dashboard" element={<Dashboard />} />
              <Route path="/settings" element={<Settings />} />
            </Routes>
          </div>
        </SignedIn>
      </div>
    </Router>
  );
};

export default App;
